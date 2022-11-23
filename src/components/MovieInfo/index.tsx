import { useAppSelector } from "../../redux/hooks/hooks";
import { Link } from "react-router-dom";
import './style.css';
import Cast from "./Cast/Cast";

const MovieInfo = () => {

  const movie = useAppSelector(state => state.movie);
  const cast = movie.cast;

  //@ts-ignore
  const { title, tagline, runtime, release_date, genres, overview, homepage, imdb_id, poster_path } = movie.movieInfo;
  const IMDB_base_url = "https://www.imdb.com/title/";
  const base_url:string = 'https://image.tmdb.org/t/p/';

  return (
    <div className="movie-info">
      <div className="artwork">
        <img
          src={`${base_url}w342${poster_path}`}
          alt={`${title} Poster`}
        />
      </div>

      <div className="summary">
        
        <p>{`  ${title}  `}</p>

        <p>{`  ${tagline}  `}</p>
        <p>{`  ${runtime} min / ${release_date}  `}</p>

        <p>GENRES</p>
        {genres
          ? genres.map((genre: any) => {
              return <p key={genre.id}>{genre.name}</p>;
            })
          : null}

        <p>ABOUT</p>
        <p>{`  ${overview}  `}</p>

        

        {/*@ts-ignore*/}
        <Cast cast={cast}
        base_url={base_url} 
        />

        <p><a href={`${homepage}`}>Website</a></p>
        <p><a href={`${IMDB_base_url + imdb_id}`}>IMDB</a></p>

        
        
      </div>
    </div>
  )
}

export default MovieInfo;