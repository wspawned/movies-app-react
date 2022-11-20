import './style.css';


//@ts-ignore
const MovieListItem = ( {movie, key} ) => {

  
  const base_url = 'https://image.tmdb.org/t/p/';
  const { title, poster_path, vote_average, vote_count } = movie;

  const W342H513 = {
    WIDTH: "342",
    HEIGHT: "513",
  }

  
  console.log( title, poster_path, vote_average, vote_count );

  return (
    <div className="list-item" key={key}>
      {title}
      <img
      src={`${base_url}w${W342H513.WIDTH}${poster_path}`}
      alt={`${title} Poster`}
      />
    </div>

  );
};

export default MovieListItem;

// src={`${base_url}w${W342H513.WIDTH}${poster_path}`}