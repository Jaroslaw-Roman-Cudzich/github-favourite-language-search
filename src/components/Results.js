import React from "react";

const Results = (props) => {
    const { repos } = props;
    console.log("Repos is: ", repos);
    return (
    <ul>
        <li>Favourite Programming Language</li>
    </ul>
    );
};

export default Results;