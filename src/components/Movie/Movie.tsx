import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";
import MovieInfo from "../MovieInfo";
import { getRecommendedMovies } from "../../redux/actions/getRecommendedMovies";
import './style.css';
import RecommendedMovieList from "../RecommendedMovieList";
import { getCredits } from "../../redux/actions/getCredits";

const Movie = () => {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const recommendedMovies = useAppSelector((state) => state.movie.recommendedMovies )

  // need trailer still 
  
  useEffect(() => {
    //@ts-ignore
    dispatch( getMovie(id) );
    //@ts-ignore
    dispatch( getRecommendedMovies(id) );
    //@ts-ignore
    dispatch( getCredits(id) );
  },[dispatch,id])


  return (
    <div className="movie-page">
      <Link to="/"><h1 style={{textAlign: "center"}} >BACK TO HOME</h1></Link>
      <MovieInfo/>
      {/*@ts-ignore*/}
      <RecommendedMovieList movies  ={recommendedMovies} />
    </div>
  );
};

export default Movie;