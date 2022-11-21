import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";

const Movie = () => {

  const {id} = useParams();
  const dispatch = useAppDispatch();

  const movie = useAppSelector(state => state.movie);
  //@ts-ignore
  const { title, tagline, runtime, release_date, genres, overview, homepage, imdb_id, poster_path } = movie.movie;
  const IMDB_base_url = "https://www.imdb.com/title/"
  const poster_base_url = 'https://image.tmdb.org/t/p/';

  // need trailer still 
  
  useEffect(() => {
    //@ts-ignore
    dispatch(getMovie(id))
  },[dispatch,id])


  return (
    <div style={{marginLeft  :"80px"}} >
      <header>
        <Link to="/"> <h1>BACK TO HOME</h1> </Link>
      </header>
      

      <p>{`loookin for this ?  ===>   id= ${id}`}</p>
      <p>{`  ${title}  `}</p>

      <img
      src={`${poster_base_url}w342${poster_path}`}
      alt={`${title} Poster`}
      />


      <p>{`  ${tagline}  `}</p>
      <p>{`  ${runtime} min / ${release_date}  `}</p>

      <p>GENRES</p>
      { (genres) ? genres.map((genre:any) => {
        return (
          <p
            key={genre.id}
          >
            {genre.name}
          </p>
        );
      })  : null }



      <p>ABOUT</p>
      <p>{`  ${overview}  `}</p>

      <p><a href={`${homepage}`}>Website</a></p>
      <p><a href={`${IMDB_base_url + imdb_id}`}>IMDB</a></p>

    </div>
  )
};

export default Movie;