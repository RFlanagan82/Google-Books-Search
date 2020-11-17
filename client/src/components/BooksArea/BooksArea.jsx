import React, { Component } from 'react';
import SearchArea from "../../components/SearchArea/SearchArea";


class BooksArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchbox: ''
        }
    };

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