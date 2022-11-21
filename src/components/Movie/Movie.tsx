import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";
import MovieInfo from "../MovieInfo";
import { getRecommendedMovies } from "../../redux/actions/getRecommendedMovies";

const Movie = () => {

  const {id} = useParams();
  const dispatch = useAppDispatch();

  // need trailer still 
  
  useEffect(() => {
    //@ts-ignore
    dispatch( getMovie(id) );
    //@ts-ignore
    dispatch( getRecommendedMovies(id) );
  },[dispatch,id])


  return (

    <MovieInfo/>

  );
};

export default Movie;