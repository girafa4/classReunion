import React, { Component } from 'react';
import steer from './Steer2.jpg';
import './App.css';
// import loginfield from './login.html'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Farwell Class of 78</h1>
          <img src={steer} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
        <h1>Welcome</h1>
        </p>
        <div>
        <button className = "register">Register</button>
        </div>
        <button className = "login">Login</button>

      </div>

    );
  }
}

export default App;
