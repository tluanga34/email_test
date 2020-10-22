import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home"

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label>Filter By:</label>
        <ul className="navigation-menu">
          <li>
            <a href="#">
              <button>Unread</button>
            </a>
            <a href="#">
              <button>Read</button>
            </a>
            <a href="#" className="active">
              <button>Favourite</button>
            </a>
          </li>
        </ul>
      </header>
      <main className="main-body">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
