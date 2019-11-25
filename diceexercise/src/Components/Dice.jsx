import React, { Component } from 'react';
import '../Components/Dice.css';
class Dice extends Component {
  render() {
    return <i className={`Dice fas fa-dice-${this.props.face}`}></i>;
  }
}
export default Dice;
