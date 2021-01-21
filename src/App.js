import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      'Vlad',
      'Olga',
      'Vira'
    ]
  };

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        'Vlad',
        event.target.value,
        'Viralia'
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          name={this.state.users[1]}
          changed={this.nameChangeHandler} />
        <UserOutput
          name={this.state.users[0]}>My Hobbies: Racing</UserOutput>
        <UserOutput
          name={this.state.users[1]}>My Hobbies: Diving</UserOutput>
        <UserOutput
          name={this.state.users[3]}>My Hobbies: Laying</UserOutput>
      </div>
    );
  }
}
export default App;