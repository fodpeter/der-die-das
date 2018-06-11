import React from "react";
import "./App.css";
import Words from "./words";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Der Die Das</h1>
    </header>
    <p className="App-intro">
      <Words />
    </p>
  </div>
);

export default App;
