import React, { Component } from 'react';
import SearchArea from "../../components/SearchArea/SearchArea";
import axios from "axios";


class BooksArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchbox: ''
        }
    };

    searchBook = () => {
        axios
        .get("https://www.googleapis.com/books/v1/volumes")
    }

    handleBookSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchbox: e.target.value })

    };

    render() {
        return (
            <div>
                <SearchArea handleBookSearch={this.handleBookSearch}/>
            </div>
        );
    }
}

export default BooksArea;