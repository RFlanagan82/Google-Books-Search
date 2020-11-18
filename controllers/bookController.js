const express = require("express");
const router = express.Router();
const db = require("../client/src/models");

router.get("/", (req, res) => {
  db.Book.find({})
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all books.",
      });
    });
});

router.post("/", (req, res) => {
    //bring in model elements needed for book search
    const newBookSearch = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
    };
    db.Book.create(newBookSearch)
    .then((newBookSearch) => res.json(newBookSearch))
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Failed to retrieve books."
        });
    });
});

router.delete("/:id", (req,res) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then((deleteBook) => {
        res.json(deleteBook)
    })
    .catch((err) => {
        res.status(500).json( {
            error:true,
            data: null,
            message: "Failed to delete the book."
        });
    });
});

module.exports = router;
