import React from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import BooksFantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';
import FooterComponent from './FooterComponent';
import BookListComponent from './BookListComponent';

class MainComponent extends React.Component {
  state = {
    searchString: ''
  };

  searchBook = ev => {
    this.setState({
      searchString: ev.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <Container>
        <NavComponent />
        <Row>
          <Col md='12'>
            <HeaderComponent />
            <Button>COVERS</Button>
            <Button>LIST</Button>
          </Col>

          <Col md='12'>
            <Input
              type='text'
              placeholder='Search for a book'
              onChange={this.searchBook}
              value={this.state.searchString}
              className='mb-5'
            />
          </Col>

          {BooksFantasy.filter(
            books =>
              books.title.toLowerCase().includes(this.state.searchString) || books.category.toLowerCase().includes(this.state.searchString)
          ).map((bookEntry, index) => (
            <Col md='3'>
              <SingleBook books={bookEntry} key={index} />
            </Col>
          ))}
        </Row>

        <Row>
          {BooksFantasy.map((bookEntry, index) => (
            <Col md='3' id='#titles'>
              <ul>
                <BookListComponent books={bookEntry} key={index} />
              </ul>
            </Col>
          ))}

          <FooterComponent />
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
