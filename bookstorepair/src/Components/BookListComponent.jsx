import React from 'react';

class BookListComponent extends React.Component {
  state = {};
  render() {
    return <li>{this.props.dish.title}</li>;
  }
}

export default BookListComponent;
