import React from 'react';
import CreateComment from './CreateComment';
import { Spinner } from 'reactstrap';
class BookDetails extends React.Component {
  state = { comments: [], isLoading: true };
  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          <img src={this.props.selectedBook.img} style={{ maxWidth: '100%' }}></img>
        </div>
        <div className='col-md-8'>
          <h1>Comments:</h1>
          {this.state.isLoading && <Spinner></Spinner>}
          {this.state.comments.length == 0 && <h2>No comments for this books, be the first to add one!</h2>}
          {this.state.comments.length > 0 &&
            this.state.comments.map((comment, index) => (
              <div key={index}>
                {comment.comment} - {comment.rate}
              </div>
            ))}

          <CreateComment asin={this.props.selectedBook.asin} addComment={this.addComment}></CreateComment>
        </div>
      </div>
    );
  }

  addComment = comment => {
    this.setState({
      comment: [...this.state.comments, comment]
    });
  };
  componentDidMount = async () => {
    let response = await fetch('https://strive-school-testing-apis.herokuapp.com/api/comments/' + this.props.selectedBook.asin, {
      headers: {
        Authorization: 'Basic dXNlcjMwOkU2dFlzNlBCenVmUmZzVlA'
      }
    });

    let comments = await response.json();

    this.setState({
      comments: comments,
      isLoading: false
    });
  };
}

export default BookDetails;
