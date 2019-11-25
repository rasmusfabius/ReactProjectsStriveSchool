import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './Components/Dice';

function App() {
  return (
    <div className='App'>
      <Dice face='one' />
      <Dice face='two' />
      <Dice face='three' />
      <Dice face='four' />
      <Dice face='five' />
      <Dice face='six' />
    </div>
  );
}

export default App;
