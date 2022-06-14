import React from "react";
import "./SearchResult.css";

const SearchResult = (props) => {
    const { repos } = props;


    
    if (repos === undefined){
      return <div className="search-result-region">
        <h4 className="invalid-search-input-error">This search input is invalid.  Please type in a valid GitHub username.</h4>
        </div>;
    };

    console.log("GitHub user's repos: ", repos.data);

    const mostFreqLanguage = 
        repos.length === 0 ? ( 

            <h4 className="invalid-search-input">Please ensure that the GitHub username is valid and in existence.</h4>      
        ) : (
            <h4 className="search-result" key="item.id">The GitHub user's favourite (most frequently used) programming language is {((repos.data.map(function(el) {
                return el.language;
              })).filter(function(language, index, arr) {
                return language != null
              })).reduce((previousLanguage, currentLanguage, currentIndex, arr) =>
              arr.filter(language => language === previousLanguage).length >
              arr.filter(language => language === currentLanguage).length
                ? previousLanguage
                : currentLanguage
            )}.</h4>);

    return <div className="search-result-region">{mostFreqLanguage}</div>;
};

export default SearchResult;