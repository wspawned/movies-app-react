import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import type { RootState } from '../../store';
import { getGenres } from '../../actions/getGenres';
import { useEffect } from 'react';

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

  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getGenres())
  // }, [dispatch] );


  // const dispatch = useDispatch();
  // dispatch(getGenres());


  const test = useSelector((state:RootState) => state.test)

  return (
    <div className="side-drawer">
      <p>ı am the side drawer</p>

      <h2>Discover</h2>
      {STATIC_MOVIE_CATEGORIES.map((category: movieCategories) => {
        return <p key={category.id}>{category.name}</p>;
      })}

      <h2>Genres</h2>
      <p>{test}</p>

      

    </div>
  );
}

export default Menu;


// type genre = {
//     id:number,
//     name:string,
//   };
//   type genres = genre[];

  
//   const genres = getMovieGenres();

// {genres.map((genre:genre) => {
//         return <p key={genre.id}>{genre.name}</p>;
//       })};


