import MovieList from "../MovieList";
import type { RecommendedMovieType } from "../../redux/actions/getRecommendedMovies";
import './style.css';

const RecommendedMovieList:React.FC<{movies:RecommendedMovieType[]}> = ({movies}) => {
  return (
    <>
    <h1 className="recommended-movies-header" >RECOMMENDED MOVIES</h1>
    <MovieList movies={movies}/>
    </>
  )
}

export default RecommendedMovieList;