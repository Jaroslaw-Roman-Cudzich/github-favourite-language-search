import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./SearchBar.css";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        console.log(searchInput);

    try {
        const result = await axios(`https://api.github.com/users/${searchInput}/repos`);

        setRepos(result);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
        <div className="search-results-region"
        style={{padding: "40px"}}>
        <form>
            <input className="search-input-field"
                id="username"
                name="username"
                type="text" 
                placeholder="GitHub username"
                value={searchInput}
                required
                onChange={handleChange}
            />
            <button className="search-bar-button" type="button" onClick={handleClick}>Search</button>
        </form>
        </div>
        <SearchResult repos={repos} />
        </>
    );
};

export default SearchBar;