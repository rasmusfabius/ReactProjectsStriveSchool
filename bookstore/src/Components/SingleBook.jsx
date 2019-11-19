import React from 'react';
import { Media } from 'reactstrap';

class SingleBook extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <Media>
        <Media left href='#'>
          <Media object src={this.props.dish.img} alt='Generic placeholder image' />
          <Media heading>{this.props.dish.title}</Media>
          <Media body>{this.props.dish.category}</Media>
        </Media>
      </Media>
    );
  }
}

export default SingleBook;
