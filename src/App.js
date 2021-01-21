import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Vlad', age: 24 },
      { name: 'Olga', age: 25 },
      { name: 'Vira', age: 30 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Olga', age: 10 },
        { name: 'Viralia', age: 30 }
      ]
    });
    console.log(this.state.otherState);
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Vlad', age: 24 },
        { name: event.target.value, age: 25 },
        { name: 'Viralia', age: 30 }
      ]
    });
  };

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'ingerit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>THis is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Vld123!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Vld!!')}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}
export default App;