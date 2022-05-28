import axios from "axios";
import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        console.log(searchInput);

        const result = await axios(``)

    };

    return (
        <div style={{padding: "20px"}}>
            <input type="text" 
                placeholder="Search"
                value={searchInput}
                onChange={handleChange} 
            />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBar;