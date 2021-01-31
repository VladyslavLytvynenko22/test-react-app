import React, { Component } from 'react';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [
      { id: 'n1', name: 'Vlad', age: 24 },
      { id: 'n2', name: 'Olga', age: 25 },
      { id: 'n3', name: 'Vira', age: 30 },
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  changeCockpitHandler = () => {
    this.setState({ showCockpit: !this.state.showCockpit });
  };

  render() {
    let persons = null;
    let cockpit = null;
    let buttonText = 'Show cockpit';

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
      );
      buttonText = 'Hide cockpit';
    }

    return (
      <div className={classes.App}>
        <button onClick={this.changeCockpitHandler}>{buttonText}</button>
        {cockpit}
        {persons}
      </div>
    );
  }
}

export default App;
