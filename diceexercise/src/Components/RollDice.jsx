import React, { Component } from 'react';
import Dice from './Dice';
import '../Components/RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  state = {
    die1: 'three',
    die2: 'six',
    isRolling: false
  };

  roll = () => {
    //Pick 2 new rolls
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //set state with new rolls

    this.setState({ die1: newDie1, die2: newDie2, isRolling: true });

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Dice face={this.state.die1} rolling={this.state.isRolling} />
          <Dice face={this.state.die2} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}
export default RollDice;
