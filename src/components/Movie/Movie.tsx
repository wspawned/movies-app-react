import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";
import MovieInfo from "../MovieInfo";
import { getRecommendedMovies } from "../../redux/actions/getRecommendedMovies";
import MovieList from "../MovieList";
import './style.css';

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
  },[dispatch,id])


  return (
    <div className="movie-page">
      <MovieInfo/>
      <MovieList movies={recommendedMovies} />
    </div>
  );
};

export default Movie;