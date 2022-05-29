import React from "react";

const Results = (props) => {
    const { repos } = props;
    console.log("Repos is: ", repos.data);

    const listRepos = 
        repos.length !== 0 ? ( 
            repos.data.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
            <li>Please enter a valid GitHub username as this one does not exist.</li>
            );

    return <ul>{listRepos}</ul>;
};

export default Results;