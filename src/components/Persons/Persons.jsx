import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.elRef1 = React.createRef();
  }

  componentDidMount() {
    this.elRef1.current.focus();
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          customRef={this.elRef1}
        />
      );
    });
  }
}

export default Persons;
