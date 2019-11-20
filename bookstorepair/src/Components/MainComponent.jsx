import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import BooksFantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';
import FooterComponent from './FooterComponent';

class MainComponent extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <NavComponent />
        <Row>
          <Col md='12'>
            <HeaderComponent />
          </Col>

          {/* Every time you have a map or a foreach, remember to specify the KEY for each item you are creating.
                      Key is a props, usually you can use the second parameter of map or foreach as unique identified
                      example:
                      */}
          {BooksFantasy.map((bookEntry, index) => (
            <Col md='3'>
              <SingleBook dish={bookEntry} key={index} />
            </Col>
          ))}
          <FooterComponent />
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
