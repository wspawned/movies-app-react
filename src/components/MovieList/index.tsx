import MovieListItem from './MovieListItem';
import './style.css';

//@ts-ignore
const MovieList = ( {movies} ) => {
  

  return (
    <div className="movie-list">
      {/* @ts-ignore */ }
    {movies.map((movie, index) => {
      return (
        
          
          <MovieListItem
          /* @ts-ignore */ 
          movie = {movie}
          key = {index}
          />

        
      );
    })}
  </div>
  )
};

export default MovieList;