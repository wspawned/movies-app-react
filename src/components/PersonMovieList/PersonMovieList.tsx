import { PersonMovieType } from "../../redux/actions/getPersonMovies";
import MovieList from "../MovieList";
import './style.css';

const PersonMovieList:React.FC<{movies:PersonMovieType[]}> = ({movies}) => {
  return (
    <>
      <h1 className="person-movies-header" >PERFORMS IN</h1>
      <MovieList movies={movies}/>
    </>
  )
};

export default PersonMovieList;