import React from 'react';

class MovieItem extends React.Component {
  state = {};
  render() {
    let movie = this.props.movie;
    return (
      <div className='col-md-2' onClick={() => this.props.setMovieId(movie.imdbID)}>
        <img style={{ width: '90%' }} src={movie.Poster} alt={'movie poster for ' + movie.Title} />
        <span>{movie.Title}</span>
      </div>
    );
  }
}

export default MovieItem;
