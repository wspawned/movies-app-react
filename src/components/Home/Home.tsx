import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { decreasePage, increasePage } from '../../redux/slices/movieListSlice';
import type { GenreMoviesResult } from '../../redux/actions/getGenreMovies';
import MovieList from '../MovieList';

const Home = () => {

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
    <div className='home-list'>
      
      <div className='category-header' >
        <h1>{selectedMenuItem.name} MOVIES</h1>
        
      </div>
      {/* @ts-ignore */}
      <MovieList movies={movieList.movies} />

      <div className='page-buttons'>
          <button
          onClick={()=> dispatch(decreasePage()) }
          >{`${movieList.page -1} <= ${movieList.page}`}</button>

          <button
          onClick={()=> dispatch(increasePage()) }
          >{`${movieList.page}  => ${movieList.page +1}`}</button>   
        </div>

    </div>
  );
};

export default Home;