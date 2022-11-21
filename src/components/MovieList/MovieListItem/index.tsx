import './style.css';
import { Link } from "react-router-dom";


//@ts-ignore
const MovieListItem = ( {movie, key} ) => {

  
  const base_url = 'https://image.tmdb.org/t/p/';
  const { title, poster_path, vote_average, vote_count, id } = movie;

  const W342H513 = {
    WIDTH: "342",
    HEIGHT: "513",
  }

  return (


    <div className="list-item" 
    key={key}
    // onClick={()=> redirect(`/movie/${id}`) }
    >
    
      {title}
    <Link to={`/movie/${id}`} >
      <img
      className='list-poster'
      src={`${base_url}w${W342H513.WIDTH}${poster_path}`}
      alt={`${title} Poster`}
      />
    </Link>
    </div>


  );
};

export default MovieListItem;

// src={`${base_url}w${W342H513.WIDTH}${poster_path}`}
// /?category=Popular&id=popular&page=1