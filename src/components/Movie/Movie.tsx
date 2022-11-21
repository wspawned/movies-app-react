import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";
import MovieInfo from "../MovieInfo";

const Movie = () => {

  const {id} = useParams();
  const dispatch = useAppDispatch();

  // need trailer still 
  
  useEffect(() => {
    //@ts-ignore
    dispatch(getMovie(id))
  },[dispatch,id])


  return (

    <MovieInfo/>

  );
};

export default Movie;