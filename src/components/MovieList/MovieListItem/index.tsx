import './style.css';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { resetMovie } from '../../../redux/slices/movieSlice';
import type { GenreMoviesType } from '../../../redux/actions/getGenreMovies';
import type { RecommendedMovieType } from '../../../redux/actions/getRecommendedMovies';

const MovieListItem:React.FC<{movie:GenreMoviesType|RecommendedMovieType, key:number}> = ( {movie, key} ) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  
  const base_url = 'https://image.tmdb.org/t/p/';
  const { title, poster_path, vote_average, vote_count, id } = movie;

  const W342H513 = {
    WIDTH: "342",
    HEIGHT: "513",
  }

  return (


    <div className="list-item" 
    key={key}
  
    onClick={()=> {
      dispatch(resetMovie());
      navigate( `/movie/?id=${id}` );
    }}
    >
    
      {title}
    
      <img
      className='list-poster'
      src={`${base_url}w${W342H513.WIDTH}${poster_path}`}
      alt={`${title} Poster`}
      />
    </div>

  );
};

export default MovieListItem;