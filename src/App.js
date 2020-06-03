import React from "react";
import logo from "./logo.svg";
import { Navbar } from "reactsrap";
import "./App.css";
import { NavbarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
