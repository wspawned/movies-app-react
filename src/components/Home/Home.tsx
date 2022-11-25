import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { decreasePage, increasePage } from '../../redux/slices/movieListSlice';
import MovieList from '../MovieList';
import { setSelectedMenuItem, STATIC_MOVIE_CATEGORIES } from '../../redux/slices/generalSlice';

const Home = () => {

  const selectedMenuItem = useSelector((state:RootState)=>state.general.selectedMenuItem);
  const movieList = useAppSelector((state:RootState) => state.movieList );
  const movie = useAppSelector((state:RootState) => state.movie.movieInfo );

  const dispatch = useAppDispatch();
  
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("Home URL main object>>>" + searchParams);

  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsId = searchParams.get("id") || STATIC_MOVIE_CATEGORIES[0].name;
  const paramsCategoryName = searchParams.get("category") || STATIC_MOVIE_CATEGORIES[0].id;

  console.log("Home URL parse>>> paramsPage:" + paramsPage + " paramsId:" + paramsId + " paramsCategory:" + paramsCategoryName);
  
  useEffect( () => {
    
  
      //@ts-ignore
      dispatch(getGenreMovies( {paramsId, paramsPage} ));

      dispatch(setSelectedMenuItem({name:paramsCategoryName}))

  }, [searchParams, dispatch ] )


  return (
    <div className='home-list'>
      
      <div className='category-header' >
        <h1>{paramsCategoryName} MOVIES</h1>
        
      </div>
      <MovieList movies={movieList.movies} />

      <div className='page-buttons'>
          <button
          onClick={()=> {
            const newPage =  Number(paramsPage) -1 ;
            setSearchParams({category:`${paramsCategoryName}`,id:`${paramsId}`, page:`${newPage}`});
            dispatch(decreasePage());
          } }
          >{`${movieList.page -1} <= ${movieList.page}`}</button>

          <button
            onClick={()=> {
              const newPage =  Number(paramsPage) +1 ;
              setSearchParams({category:`${paramsCategoryName}`,id:`${paramsId}`, page:`${newPage}`});
              dispatch(increasePage());
            } }
          >{`${movieList.page}  => ${movieList.page +1}`}</button>   
        </div>

    </div>
  );
};

export default Home;