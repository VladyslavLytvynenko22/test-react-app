import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import classes from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      { id: "n1", name: "Vlad", age: 24 },
      { id: "n2", name: "Olga", age: 25 },
      { id: "n3", name: "Vira", age: 30 },
    ],
    otherState: "some other value",
    showPersons: false,
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

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
