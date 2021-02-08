import React from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default person;
