import React, { Fragment } from "react";
import "./App.css";
import Game from "./game";
import GitHubForkRibbon from "react-github-fork-ribbon";

const App = () => (
  <Fragment>
    <GitHubForkRibbon
      href="https://github.com/fodpeter/der-die-das"
      target="_blank"
      position="right"
    >
      Fork me on GitHub
    </GitHubForkRibbon>
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Welcome to Der Die Das</h1>
      </header>
      <div className="app-intro">
        <Game />
      </div>
    </div>
  </Fragment>
);

export default App;
