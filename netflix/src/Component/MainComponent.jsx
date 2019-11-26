import React from 'react';
import { Container } from 'reactstrap';
import MovieList from './MovieList';
import MyNav from './MyNav';
import MovieDetails from './MovieDetails';

class MainComponent extends React.Component {
  state = {
    movies: [],
    searchResult: undefined,
    selectedMovieID: undefined
  };

  render() {
    return (
      <Container fluid={true}>
        <MyNav changeSearch={search => this.searchMovies(search)}></MyNav>
        {this.state.selectedMovieID && <MovieDetails movieId={this.state.selectedMovieID} />}

        {this.state.movies.map((movie, index) => (
          <MovieList movies={movie.items} key={index} title={movie.title} setMovieId={this.setSelectedMovieId} />
        ))}

        {this.state.searchResult && (
          <MovieList movies={this.state.searchResult} title='Search Result' setMovieId={this.setSelectedMovieId} />
        )}
      </Container>
    );
  }

  setSelectedMovieId = movieId => this.setState({ selectedMovieID: movieId });

  searchMovies = async searchQuery => {
    let response = await fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=' + searchQuery);
    let movieResult = await response.json();
    console.log(searchQuery);
    this.setState({ searchResult: movieResult.Search, searchQuery: searchQuery });
  };

  componentDidMount = async () => {
    let movieTitles = ['Harry potter', 'Die Hard', 'Star Wars', 'Lord of the Rings'];

    movieTitles.forEach(async movie => {
      let response = await fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=' + movie);
      let movieResult = await response.json();

      this.setState({
        movies: [...this.state.movies, { items: movieResult.Search, title: movie }]
      });
    });
  };
}

export default MainComponent;
