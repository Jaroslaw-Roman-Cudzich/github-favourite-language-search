import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

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
        <div 
        style={{padding: "40px"}}>
        <form>
            <input 
                style={{borderBlockEndColor: "grey"}}
                id="username"
                name="username"
                type="text" 
                placeholder="GitHub username"
                value={searchInput}
                required
                onChange={handleChange}
            />
            <button type="button" onClick={handleClick}>Search</button>
        </form>
        </div>
        <SearchResults repos={repos} />
        </>
    );
};

export default SearchBar;