import React, { Component } from 'react';
import steer from './Steer2.jpg';
import './App.css';
import Login from "./components/login.js"
import Registration from "./components/Registration.js"




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
      
        </div>
        <Registration />
        <Login />
        
        
        
      </div>

    );
  }
}

export default App;
