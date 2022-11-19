import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';


const MovieList = () => {

  const selectedMenuItem = useSelector((state:RootState)=>state.general.selectedMenuItem);
  const selectedMenuItemName = selectedMenuItem.name;
  const selectedMenuItemId = selectedMenuItem.id;

  const movies = useAppSelector((state) => state.movieList.movies );
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  

  // const location = useLocation();
  const genreId = searchParams.get("id");

  useEffect( () => {
    setSearchParams({category:`${selectedMenuItemName}`,id: `${selectedMenuItemId}`, page:"5"});
    console.log(selectedMenuItem)
  }, [selectedMenuItem ] )
  
  useEffect( () => {
    
    //@ts-ignore
    dispatch(getGenreMovies(genreId));
    console.log(genreId)

  }, [genreId, dispatch ] )


  return (
    <>
      <div className='category-header' >
      <h1>{selectedMenuItemName}</h1>
      <h2>MOVIES</h2>
      </div>
      
      <div className="home-list">
        {movies.map((movie, index) => {
          return (
            <div className="list-item" key={index}>
              
              {
                movie.title
              }
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;