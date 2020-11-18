import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import StoredBookCard from "../components/StoredBookCard/StoredBookCard";
import NoBookCard from "../components/NoBookCard/NoBookCard";
import "./Saved.css";

const SavedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    },[]);

    const getBooks = function() {
        axios
        .get("/api/books")
        .then((response) => {
            setBooks(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const deleteBook = function (_id) {
        axios
          .delete(`/api/books/${_id}`)
          .then((response) => {
            console.log(response.data);
            getBooks();
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return (
        <>
          <Container>
            <Row>
              <div className="col-sm-12 text-center my-5 savedtext">
                <h1><b>My Saved Book Library</b></h1>
              </div>
            </Row>
            <Row>
              {books.length ? (
                books.map((book, index) => <StoredBookCard {...book} key={index} deleteBook={deleteBook} />)
              ) : (
                <NoBookCard message="No Saved Books Here" className="card mb-3"/>
              )}
            </Row>
          </Container>
        </>
      );
}

export default SavedBooks;