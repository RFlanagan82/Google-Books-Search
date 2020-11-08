import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import Searchcard from "../components/Searchcard/Searchcard";
import "./Search.css";

const Search = () => {
    return(
        <>
        <Searchbar />
        <div className="Container">
            <h4 className="headertext">Results</h4>
        </div>
        <div className="Container">
            <Searchcard />
        </div>
        
        </>
    )
}


export default Search;