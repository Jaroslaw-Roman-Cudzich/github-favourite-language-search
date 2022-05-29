import React from "react";

const Results = (props) => {
    const { repos } = props;
    console.log("GitHub user's repos: ", repos.data);

    const mostFreqLanguage = 
        repos.length === 0 ? ( 
 
                // repos.data.map((item) => <li key={item.id}>{item.language}</li>)

            <li>Please enter a valid GitHub username as this one does not exist.</li>      
        ) : (
            ((repos.data.map(function(el) {
                return el.language;
              })).filter(function(language, index, arr) {
                return language != null
              })).reduce((previousLanguage, currentLanguage, currentIndex, arr) =>
              arr.filter(language => language === previousLanguage).length >
              arr.filter(language => language === currentLanguage).length
                ? previousLanguage
                : currentLanguage
            ));

    return <ul>{mostFreqLanguage}</ul>;
};

export default Results;