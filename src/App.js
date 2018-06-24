import React from "react";
import "./App.css";
import Game from "./game";

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1 className="app-title">Welcome to Der Die Das</h1>
    </header>
    <div className="app-intro">
      <Game />
    </div>
  </div>
);

export default App;
