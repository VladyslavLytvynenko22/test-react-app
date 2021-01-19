import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>THis is really working!</p>
        <Person name="Vlad" age="24" />
        <Person name="Olga" age="25" />
        <Person name="Vira" age="30" />
      </div>
    );
  }
}

export default App;
