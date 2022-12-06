import { useAppSelector } from "../../redux/hooks/hooks";
import './style.css';
import Cast from "./Cast/Cast";
import { MovieInfoType } from "../../redux/actions/getMovie";
import { useNavigate } from "react-router-dom";
import Trailer from "./Trailer";

const MovieInfo = () => {

  const movie = useAppSelector(state => state.movie);
  const navigate = useNavigate();

  const cast = movie.cast;
  const info = movie.movieInfo as MovieInfoType;
  
  const { title, tagline, runtime, release_date, genres, overview, homepage, imdb_id, poster_path, videos } = info;
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

      <div className="movie-summary">
        
        <h1>{`  ${title?.toUpperCase()}  `}</h1>
        <p>{`  ${tagline?.toUpperCase()}  `}</p>

        <p>{`  ${runtime} min / ${release_date}  `}</p>

        <h3>GENRES</h3>
        {genres
          ? genres.map((genre: any) => {
              return (
                <p className="movie-genre" key={genre.id}
                onClick={() => {
                  navigate(`/?category=${genre.name}&id=${genre.id}&page=1`);
                }}
                >{genre.name}</p>
              );
            })
          : null}

        <h3>ABOUT</h3>
        <p>{`  ${overview}  `}</p>

        
        <Cast cast={cast}
        base_url={base_url} 
        />

        <div className="links">
          <a href={`${homepage}`}>Website</a>
          <a href={`${IMDB_base_url + imdb_id}`}>IMDB</a>
          <Trailer videos={videos?.results} />
        </div>
        
      </div>
    </div>
  )
}

export default MovieInfo;