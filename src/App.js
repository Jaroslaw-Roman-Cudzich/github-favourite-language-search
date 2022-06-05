import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div
      style={{padding: "20px"}}>
      <h2>Welcome to the GitHub Favourite Language Search</h2>
      <h3>Please enter a random GitHub username.</h3>
      <SearchBar/>
    </div>
  );
}

export default App;
