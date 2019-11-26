import React from 'react';
import { Row } from 'reactstrap';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
  state = {};
  render() {
    return (
      <Row>
        <h1>{this.props.title}</h1>
        <Row>
          {this.props.movies.map((movie, index) => (
            <MovieItem setMovieId={this.props.setMovieId} movie={movie} key={index} />
          ))}
        </Row>
      </Row>
    );
  }
}

export default MovieList;
