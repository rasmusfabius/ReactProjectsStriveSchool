import React from 'react';

class BookList extends React.Component {
  state = {};
  render() {
    return (
      <div className='row'>
        {this.props.books
          .filter(book => book.title.toLowerCase().includes(this.props.filter))
          .map((book, index) => (
            <div className='col-md-3' key={index} onClick={() => this.props.onBookSelected(book)}>
              <img src={book.img} style={{ maxWidth: '100%' }}></img>
              <span>{book.title}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default BookList;
