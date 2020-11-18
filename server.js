require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const bookController = require("./controllers/bookController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});

//Validate a connection to the server.
app.get("/api/config", (req, res) => {
    res.json ({
        success: true,
    });
});

app.use("/api/books", bookController);

//Wildcard Route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}!`);
});
