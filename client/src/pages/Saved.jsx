import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import axios from "axios";
import SavedBookCard from "../../components/SavedBookCard/SavedBookCard";
// import NoBooksCard from "../../components/NoBooksCard/NoBooksCard";

const SavedBooks = () => {
    const [books, setBook] = useState([]);

    useEffect(() => {
        getBook();
    },[]);

    const getBook = function() {
        axios.get("/api/books")
        .then((res) => {
            setBook(res.data);
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
              <div className="col-sm-12 text-center my-5">
                <h1>My Saved Book Library</h1>
              </div>
            </Row>
            <Row>
              {books.length ? (
                books.map((book, index) => <SavedBookCard {...book} key={index} deleteBook={deleteBook} />)
              ) : (
                <NoBooksCard message="No Saved Books" className="card mb-3"/>
              )}
            </Row>
          </Container>
        </>
      );
}

export default SavedBooks;