import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';


const MovieList = () => {

  const selectedMenuItemName = useSelector((state:RootState)=>state.general.selectedMenuItem.name);
  const selectedMenuItemId = useSelector((state:RootState)=>state.general.selectedMenuItem.id);

  

  const movies = useAppSelector((state) => state.general.movies )

  const navigate = useNavigate();

  const location = useLocation();
  const genreId = location.pathname.replace("/","");

  const dispatch = useAppDispatch();

  
  useEffect(() => {
    navigate(`/${selectedMenuItemId}`);
    // @ts-ignore
    dispatch(getGenreMovies(genreId));
  }, [selectedMenuItemName, navigate, dispatch ] )


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
              
              {// @ts-ignore
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