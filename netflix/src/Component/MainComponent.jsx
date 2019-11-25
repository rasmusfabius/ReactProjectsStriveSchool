import React from 'react';
import { Container } from 'reactstrap';
import NavComponent from './NavComponent';

import Movie2Component from './Movie2Component';

class MainComponent extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <NavComponent />
        <Movie2Component />
      </Container>
    );
  }
}

export default MainComponent;
