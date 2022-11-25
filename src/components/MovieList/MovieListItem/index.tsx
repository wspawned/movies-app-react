import './style.css';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { getMovie } from '../../../redux/actions/getMovie';
import { resetMovie } from '../../../redux/slices/movieSlice';


//@ts-ignore
const MovieListItem = ( {movie, key} ) => {

  const [searchParams,setSearchParams] = useSearchParams();
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
      navigate( `/movie/${id}` );
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

// src={`${base_url}w${W342H513.WIDTH}${poster_path}`}
// /?category=Popular&id=popular&page=1