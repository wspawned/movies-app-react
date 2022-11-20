import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { increasePage } from '../../redux/slices/movieListSlice';

const MovieList = () => {

  const selectedMenuItem = useSelector((state:RootState)=>state.general.selectedMenuItem);
  const movieList = useAppSelector((state) => state.movieList );

  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect( () => {
    setSearchParams({category:`${selectedMenuItem.name}`,id: `${selectedMenuItem.id}`, page:`${movieList.page}`});
    // console.log(selectedMenuItem)

  }, [selectedMenuItem, movieList] )

  
  
  useEffect( () => {
    const genreId = searchParams.get("id");
    const paramsPage = searchParams.get("page")
    //@ts-ignore
    dispatch(getGenreMovies( {genreId, paramsPage} ));
    // console.log( paramsPage)

  }, [searchParams, dispatch ] )


  return (
    <>
      <div className='category-header' >
      <h1>{selectedMenuItem.name}</h1>
      <h2>MOVIES</h2>
      </div>
      
      <div className="home-list">
        {movieList.movies.map((movie, index) => {
          return (
            <div className="list-item" key={index}>
              
              {
                movie.title
              }
            </div>
          );
        })}

      <button
      className='next-button'
      onClick={()=> dispatch(increasePage()) }
      >next</button>
      </div>

    </>
  );
};

export default MovieList;