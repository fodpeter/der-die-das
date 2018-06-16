import React from "react";
import "./App.css";
import Game from "./game";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Der Die Das</h1>
    </header>
    <div className="App-intro">
      <Game />
    </div>
  </div>
);

export default App;
