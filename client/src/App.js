import React, { Component } from "react";
import Navbar from "./components/container/navbar/Navbar";
import "./App.css";
import Home from "./components/container/Home";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
