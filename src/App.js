import React from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  return (
    <div>
      <h1>GitHub Favourite Language Search</h1>
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
