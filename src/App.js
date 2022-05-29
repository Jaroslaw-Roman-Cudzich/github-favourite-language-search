import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>GitHub Favourite Language Search</h1>
      <h2>Please enter a random GitHub username and the GitHub user's favourite (most frequently used) programming language will be displayed.</h2>
      <SearchBar/>
    </div>
  );
}

export default App;
