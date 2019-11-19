import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

class ClaimComponent extends React.Component {
  state = {};
  render() {
    return (
      <Jumbotron>
        <h1 className='display-3 text-center'>Welcome to Strive BookStore</h1>
        <p className='lead'>The best online store in the world</p>
        <hr className='my-2' />
        <p>We got so many book... </p>
        <p className='lead'>
          <Button color='primary'>Buy it NOW</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default ClaimComponent;
