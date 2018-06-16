import React from "react";
import "./App.css";
import Words from "./words";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Der Die Das</h1>
    </header>
    <div className="App-intro">
      <Words />
    </div>
  </div>
);

export default App;
