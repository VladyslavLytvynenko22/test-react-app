import React, { Component } from 'react';
import './App.css';
import ValidatorComponent from './ValidatorComponent/ValidatorComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: '',
    length: 0,
    textArr: []
  };

  textLengthHandler = (event) => {
    const text = event.target.value;
    const length = event.target.value.length;
    const textArr = event.target.value.split('').map((char, index) => {
      return {
        id: index,
        char: char
      };
    });

    this.setState({
      text: text,
      length: length,
      textArr: textArr
    });
  };

  deleteCharHandler = (index) => {
    const textArr = [...this.state.textArr];
    textArr.splice(index, 1);

    const text = textArr.map(symbol => symbol.char).join('');

    this.setState({
      text: text,
      length: text.length,
      textArr: textArr
    });
  };

  render() {
    const length = this.state.length;
    const textArr = [...this.state.textArr];
    const text = this.state.text;
    const chars = textArr.length > 0 ?
      textArr.map((symbol, index) =>
        <CharComponent
          letter={symbol.char}
          click={() => this.deleteCharHandler(index)}
          key={symbol.id} />) : null;

    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler} value={text} />
        <p>Length: {length}</p>
        <ValidatorComponent length={length} />
        {chars}
      </div>
    );
  };
}

export default App;