import React, { Component } from 'react';
import axios from 'axios';

class Movie2Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    axios
      .get('http://www.omdbapi.com/?apikey=1fc41d7c&s=harry%20potter')
      .then(response => {
        console.log(response);
        this.setState({ movie: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        List of post
        {movie.length ? movie.map(movies => <div key={movies.imdbID}>{movies.Title}</div>) : null}
      </div>
    );
  }
}

export default Movie2Component;
