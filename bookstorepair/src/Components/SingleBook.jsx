import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class SingleBook extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <Card>
          <CardImg top width='100%' src={this.props.dish.img} alt='Generic placeholder image' />
          <CardBody>
            <CardTitle>{this.props.dish.title}</CardTitle>
            <CardSubtitle>Category: {this.props.dish.category}</CardSubtitle>
            <CardText>Price: ${this.props.dish.price}</CardText>
            <Button color='primary'>Buy</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
