import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";
import MovieInfo from "../MovieInfo";
import { getRecommendedMovies } from "../../redux/actions/getRecommendedMovies";
import './style.css';
import RecommendedMovieList from "../RecommendedMovieList";
import { getCredits } from "../../redux/actions/getCredits";

const Movie = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  

  const dispatch = useAppDispatch();
  const recommendedMovies = useAppSelector((state) => state.movie.recommendedMovies )

  // need trailer still 
  
  useEffect(  () => {
    dispatch( getMovie(id) );
    dispatch( getRecommendedMovies(id) );
    dispatch( getCredits(id) );
  },[dispatch, id ])


  return (
    <div className="movie-page">
      
      <MovieInfo/>
      <h1 style={{textAlign: "center"}} >RECOMMENDED MOVIES</h1>
      <RecommendedMovieList movies  ={recommendedMovies} />
    </div>
  );
};

export default Movie;