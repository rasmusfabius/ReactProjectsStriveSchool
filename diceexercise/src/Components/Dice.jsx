import React, { Component } from 'react';
import '../Components/Dice.css';

class Dice extends Component {
  render() {
    return <i className={`Dice fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking'}`} />;
  }
}
export default Dice;
