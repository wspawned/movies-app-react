import MovieList from "../MovieList";
import type { RecommendedMovieType } from "../../redux/actions/getRecommendedMovies";


const RecommendedMovieList:React.FC<{movies:RecommendedMovieType[]}> = ({movies}) => {
  return (
    <MovieList movies={movies}/>
  )
}

export default RecommendedMovieList;