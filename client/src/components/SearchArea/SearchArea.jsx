import React from 'react';
import Container from "../../components/Container/Container";

const SearchArea = (props) => {
    return (
        <Container>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Book Search</label>
                        <input onChange={props.handleBookSearch} type="search" className="form-control" id="exampleInputSearch1" aria-describedby="searchHelp" />
                        <small id="searchHelp" className="form-text text-muted">Type the name of the book you're looking for.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form> 
        </Container>
    );
};

export default SearchArea;