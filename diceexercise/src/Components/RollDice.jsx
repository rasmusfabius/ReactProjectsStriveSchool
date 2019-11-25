import React, { Component } from 'react';
import Dice from './Dice';
import '../Components/RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  state = {
    die1: 'three',
    die2: 'six'
  };

  roll = () => {
    //Pick 2 new rolls
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //set state with new rolls

    this.setState({ die1: newDie1, die2: newDie2 });
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Dice face={this.state.die1} />
          <Dice face={this.state.die2} />
        </div>
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}
export default RollDice;
