import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

class MyFooterComponent extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className='text-center display-3'>Goodbye Strive BookStore</h1>
          <p className='text-center lead'>Hope to see you again soon</p>
        </Jumbotron>
      </Container>
    );
  }
}

export default MyFooterComponent;
