import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { decreasePage, increasePage } from '../../redux/slices/movieListSlice';
import MovieList from '../MovieList';
import { setSelectedMenuItem } from '../../redux/slices/generalSlice';

const Home = () => {

  const selectedMenuItem = useSelector((state:RootState)=>state.general.selectedMenuItem);
  const movieList = useAppSelector((state:RootState) => state.movieList );
  const movie = useAppSelector((state:RootState) => state.movie.movieInfo );

  const dispatch = useAppDispatch();
  
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsPage = Number(searchParams.get("page"));
  const paramsId = searchParams.get("id");
  const paramsCategory = searchParams.get("category");
  
  useEffect( () => {
    
  
      //@ts-ignore
      dispatch(getGenreMovies( {paramsId, paramsPage} ));

  }, [searchParams, dispatch ] )


  return (
    <div className='home-list'>
      
      <div className='category-header' >
        <h1>{selectedMenuItem.name} MOVIES</h1>
        
      </div>
      <MovieList movies={movieList.movies} />

      <div className='page-buttons'>
          <button
          onClick={()=> {
            const newPage =  Number(paramsPage) -1 ;
            setSearchParams({category:`${paramsCategory}`,id:`${paramsId}`, page:`${newPage}`});
            dispatch(decreasePage());
          } }
          >{`${movieList.page -1} <= ${movieList.page}`}</button>

          <button
            onClick={()=> {
              const newPage =  Number(paramsPage) +1 ;
              setSearchParams({category:`${paramsCategory}`,id:`${paramsId}`, page:`${newPage}`});
              dispatch(increasePage());
            } }
          >{`${movieList.page}  => ${movieList.page +1}`}</button>   
        </div>

    </div>
  );
};

export default Home;