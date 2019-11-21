import React from 'react';
import { Jumbotron } from 'reactstrap';

class ClaimComponent extends React.Component {
  state = {};
  render() {
    return (
      <Jumbotron>
        <h1 className='display-3 text-center'>Welcome to Strive BookStore</h1>
        <p className='lead'>The best online store in the world</p>
        <hr className='my-2' />
        <p>We got so many book... </p>
        <p className='lead'></p>
      </Jumbotron>
    );
  }
}

export default ClaimComponent;
