import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Vlad', age: 24 },
      { name: 'Olga', age: 25 },
      { name: 'Vira', age: 30 }
    ]
  };

  switchNameHandler = () => {
    console.log('Was clicked!');
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>THis is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
