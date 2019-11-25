import React from 'react';

class MovieComponent extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const urlHe = 'http://www.omdbapi.com/?apikey=1fc41d7c&s=harry%20potter';
    const url = 'http://www.omdbapi.com/?apikey=1fc41d7c&';
    const response = await fetch(urlHe);
    const movieData = await response.json();
    console.log(movieData);
  }

  render() {
    return (
      <div>
        {this.state.movieData.map(item => (
          <h1 key={item.Search.imdbID}>{item.Search.Title}</h1>
        ))}
      </div>
    );
  }
}

export default MovieComponent;
