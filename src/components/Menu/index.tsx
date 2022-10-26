import { getMovieGenres } from '../../api/tmdbAPI';
import './style.css'

type movieCategories = {
  id:string,
  name:string,
}

const STATIC_MOVIE_CATEGORIES:movieCategories[] = [
  {id: 'popular', name: 'Popular'},
  {id: 'top_rated', name: 'Top Rated'},
  {id: 'upcoming', name: 'Upcoming'}
];

function Menu() {

  type genre = {
    id:number,
    name:string,
  }
  type genres = genre[];

  
  const genres:Promise<genre[] | undefined > = getMovieGenres();
  

  return (
    <div className="side-drawer">
      <p>ı am the side drawer</p>

      <h2>Discover</h2>
      {STATIC_MOVIE_CATEGORIES.map((category: movieCategories) => {
        return <p key={category.id}>{category.name}</p>;
      })}

      <h2>Genres</h2>
      {genres.map((genre:genre) => {
        return <p key={genre.id}>{genre.name}</p>;
      })}
    </div>
  );
}

export default Menu;