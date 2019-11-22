import React from 'react';
import { Button, Input } from 'reactstrap';

class CreateComment extends React.Component {
  state = { comment: '', rating: 1 };
  render() {
    return (
      <div>
        <Input type='text' value={this.state.comment} onChange={val => this.setState({ comment: val.target.value })}></Input>
        <Input type='select' value={this.state.rating} onChange={val => this.setState({ rating: val.currentTarget.value })}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <Button onClick={this.submit}>Comment now!</Button>
      </div>
    );
  }
  submit = async () => {
    let comment = {
      comment: this.state.comment,
      rate: this.state.rating,
      elementId: this.props.asin
    };

    let response = await fetch('https://strive-school-testing-apis.herokuapp.com/api/comments/', {
      headers: {
        Authorization: 'Basic dXNlcjMwOkU2dFlzNlBCenVmUmZzVlA',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(comment)
    });

    this.setState({
      comment: '',
      rating: 1
    });

    var newComment = await response.json();

    this.props.addComment(newComment);
  };
}
export default CreateComment;
