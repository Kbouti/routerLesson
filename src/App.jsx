import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
          <li>
            <Link to="profile/popeye">Popeye</Link>
          </li>
          <li>
            <Link to="profile/spinach">Spinach</Link>
          </li>
          <li>
            <Link to="profile/kevdawg">Kevdawg</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default App;
