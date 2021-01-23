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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'ingerit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>THis is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}
export default App;