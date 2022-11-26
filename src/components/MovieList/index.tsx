import MovieListItem from './MovieListItem';
import './style.css';
import type { GenreMoviesType } from '../../redux/actions/getGenreMovies';
import type { RecommendedMovieType } from '../../redux/actions/getRecommendedMovies';


const MovieList:React.FC<{movies: GenreMoviesType[] | RecommendedMovieType[] }> = ( {movies} ) => {

  return (
    <div className="movie-list">
    
    {movies.map((movie, index) => {
      return (
          
          <MovieListItem
          
          movie = {movie}
          key = {index}
          />

        
      );
    })}
  </div>
  )
};

export default MovieList;