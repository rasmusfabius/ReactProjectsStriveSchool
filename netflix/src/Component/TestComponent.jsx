import React from 'react';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieItem: [],
      isLoaded: true
    };
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=1fc41d7c&s=harry%20potter')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          movieItem: json
        });
      });
  }

  render() {
  
        return( 
        <div>
            {this.state.movieItem.map.movie) => {
              return  <div>
                    key={movie.imdbID}>
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                </div>
            })}
        </div>
        )
    
  }
}

export default TestComponent;
