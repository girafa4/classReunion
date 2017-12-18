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
          
        </header>
        <div className="App-intro">
        Welcome
        </div>
        <img src={steer} className="App-logo" alt="logo" />
        <div>
        <button className = "register">Register</button>
        </div>
        <button className = "login">Login</button>

      </div>

    );
  }
}

export default App;
