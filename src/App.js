import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [  personsState, setPersons ] = useState({
    persons: [
      { name: 'Vlad', age: 24 },
      { name: 'Olga', age: 25 },
      { name: 'Vira', age: 30 }
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersons({
      persons: [
        { name: 'Vladyslav', age: 24 },
        { name: 'Olga', age: 10 },
        { name: 'Viralia', age: 30 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm react app</h1>
      <p>THis is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;