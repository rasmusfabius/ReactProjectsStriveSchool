import React from 'react';

class BookListComponent extends React.Component {
  state = {};
  render() {
    return <li>{this.props.books.title}</li>;
  }
}

export default BookListComponent;
