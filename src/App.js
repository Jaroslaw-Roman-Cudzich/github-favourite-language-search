import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div
      style={{padding: "20px"}}>
      <h1 >GitHub Favourite Language Search</h1>
      <h3>Please enter a random GitHub username and the GitHub user's favourite (most frequently used) programming language will be displayed.</h3>
      <SearchBar/>
    </div>
  );
}

export default App;
