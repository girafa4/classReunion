import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Farwell Class of 78</h1>
        </header>
        <p className="App-intro">
        <h1>Welcome</h1>
        </p>
        <button className = "register">Register</button>
        <button className = "login">Login</button>
      </div>

    );
  }
}

export default App;
