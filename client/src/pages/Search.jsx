import React, { useState} from 'react';
import axios from "axios";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import SearchReturnCard from "../components/SearchReturnCard/SearchReturnCard";
import NoBookCard from "../components/NoBookCard/NoBookCard";
import Notification from "../components/Notification/Notification";
import "./Search.css";


const Search = () => {
    const [searchCategory, setSearchCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [message, setMessage] = useState("card mb-3 hide");
    const [notificationMessage, setNotificationMessage] = useState({
      class: "",
      style: "",
      message: "",
    });
    const [showModal, setShowModal] = useState(false);
    const handleSearch = function (event) {
      event.preventDefault();
      if (searchCategory === "" || searchQuery === "") {
        setNotificationMessage({
          class: "alert alert-danger",
          style: "block",
          message:
            "It is required to select a category and enter a search term in order to search.",
        });
      } else if (searchCategory === "title") {
        searchByTitle();
        setNotificationMessage({
          class: "",
          style: "",
          message: "",
        });
      } else if (searchCategory === "author") {
        searchByAuthor();
        setNotificationMessage({
          class: "",
          style: "",
          message: "",
        });
      }
    };
  
    const handleReset = function () {
      setSearchCategory("");
      setSearchQuery("");
      setSearchResults([]);
      setMessage("card mb-3 hide");
      setNotificationMessage({
        class: "",
        style: "",
        message: "",
      });
      document.getElementById("search-form").reset();
    };
  
    const searchByTitle = function () {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&key=AIzaSyAOg8JMalglKFNWJfPu584_foAI1YJ9oNw`
        )
        .then((res) => {
          if (res.data.totalItems === 0) {
            setSearchResults([]);
            setMessage("card mb-3 show");
          } else {
            setSearchResults(res.data.items);
          }
        })
        .catch((err) => console.log(err));
    };
  
    const searchByAuthor = function () {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchQuery}&key=AIzaSyAOg8JMalglKFNWJfPu584_foAI1YJ9oNw`
        )
        .then((res) => {
          if (res.data.totalItems === 0) {
            setSearchResults([]);
            setMessage("card mb-3 show");
          } else {
            setSearchResults(res.data.items);
          }
        })
        .catch((err) => console.log(err));
    };
  
    const saveBook = function (e, book) {
      e.preventDefault();
      axios
        .post("/api/books", {
          title: book.title ? book.title : "No Title",
          authors: book.authors ? book.authors : [],
          description: book.description ? book.description : "",
          image: book.imageLinks ? book.imageLinks.thumbnail : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fmonsterhousebooks.com%2Fbooks%2Fangelbound-series%2Fplaceholder-cover-mhb&psig=AOvVaw1Q5-I4J0vDSekwye9g5fGf&ust=1605722480859000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi5rMiUiu0CFQAAAAAdAAAAABAD",
          link: book.infoLink ? book.infoLink : "https://google.com",
        })
        .then((response) => {
          console.log(response.data);
          toggleModal();
        })
        .catch((err) => console.log(err));
    };
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
    return (
        <>
           <Container>
        <Row>
          <div className="col-sm-2"></div>
          <div className="col-sm-8 searchtext">
            <form
              id="search-form"
              className="bg-light p-4 my-4 text-center"
              onSubmit={handleSearch}
            >
              <h3 className="text-left">Search Books:</h3>
              <div className="form-group">
                <select
                  className="form-control"
                  id="search-category"
                  name="searchCategory"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="" className="disabled">
                    Select a Category
                  </option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  name="searchQuery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-warning ml-1"
                onClick={handleReset}
              >
                Clear Results
              </button>
              <button type="submit" className="btn btn-success ml-2">
                Submit
              </button>
            </form>
            <Notification {...notificationMessage} />
          </div>
        </Row>
        <Row>
          {searchResults.length ? (
            searchResults.map((book, index) => (
              <SearchReturnCard                
                book={book.volumeInfo}
                key={index}
                saveBook={saveBook}
              />
            ))
          ) : (
            <NoBookCard
              message="Your search did not match any books."
              className={message}
            />
          )}
        </Row>
      </Container> 
        </>
    );
};

export default Search;