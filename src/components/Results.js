import React from "react";

const Results = (props) => {
    const { repos } = props;
    console.log("Repos is: ", repos.data);

    const listReposLanguages = 
        repos.length !== 0 ? ( 
            repos.data.map((item) => <li key={item.id}>{item.language}</li>)
        ) : (
            <li>Please enter a valid GitHub username as this one does not exist.</li>
            );

    return <ul>{listReposLanguages}</ul>;
};

export default Results;