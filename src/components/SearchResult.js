import React from "react";
import "./SearchResult.css";

const SearchResult = (props) => {
    const { repos } = props;
    console.log("GitHub user's repos: ", repos.data);

    const mostFreqLanguage = 
        repos.length === 0 ? ( 

            <span>Please ensure that the GitHub username is valid and in existence.</span>      
        ) : (
            ` The GitHub user's (most frequently used) programming language is: ${((repos.data.map(function(el) {
                return el.language;
              })).filter(function(language, index, arr) {
                return language != null
              })).reduce((previousLanguage, currentLanguage, currentIndex, arr) =>
              arr.filter(language => language === previousLanguage).length >
              arr.filter(language => language === currentLanguage).length
                ? previousLanguage
                : currentLanguage
            )}.`);

    return <div className="search-result">{mostFreqLanguage}</div>;
};

export default SearchResult;