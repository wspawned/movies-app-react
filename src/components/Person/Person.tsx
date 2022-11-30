import { useSearchParams } from "react-router-dom";
import { getPerson, PersonType } from "../../redux/actions/getPerson";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useEffect } from 'react';
import PersonMovieList from "../PersonMovieList/PersonMovieList";
import { getPersonMovies, PersonMoviesApiType, PersonMovieType } from "../../redux/actions/getPersonMovies";
import PersonInfo from "../PersonInfo/PersonInfo";


const Person = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  

  const dispatch = useAppDispatch();
  const person = useAppSelector((state) => state.person.personInfo) as PersonType;
  const personMovies = useAppSelector((state) => state.person.personMovies) as PersonMovieType[];
  
  useEffect(  () => {
    dispatch( getPerson(id) );
    dispatch( getPersonMovies(id) );
  },[dispatch, id ])

  return (
    <div className="person-page">
      <PersonInfo person={person}/>
      <PersonMovieList movies= {personMovies}/>
    </div>
  );
};

export default Person;