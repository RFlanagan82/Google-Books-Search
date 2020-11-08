import React from 'react';
import Container from "./Container/Container";

const Searchbar = () => {
    return (
        <Container>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Book Search</label>
                        <input type="search" className="form-control" id="exampleInputSearch1" aria-describedby="searchHelp" />
                        <small id="searchHelp" className="form-text text-muted">Type the name of the book you're looking for.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form> 
        </Container>
    )
};

export default Searchbar;