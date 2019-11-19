import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ClaimComponent from './ClaimComponent';
import MyNavComponent from './MyNavComponent';
import BooksRomantic from '../data/romance.json';
import SingleBook from './SingleBook';
import MyFooterComponent from './MyFooterComponent';

class MainComponent extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <MyNavComponent />
        <Row>
          <Col md='12'>
            <ClaimComponent />
          </Col>

          {/* Every time you have a map or a foreach, remember to specify the KEY for each item you are creating.
                    Key is a props, usually you can use the second parameter of map or foreach as unique identified
                    example:
                    */}
          {BooksRomantic.map((bookEntry, index) => (
            <Col md='3'>
              <SingleBook dish={bookEntry} key={index} />
            </Col>
          ))}
          <MyFooterComponent />
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
