import './style.css';
import { RootState } from '../../redux/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenreMovies } from '../../redux/actions/getGenreMovies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import MovieList from '../MovieList';
import { STATIC_MOVIE_CATEGORIES } from '../../redux/slices/generalSlice';

const Home = () => {
  
  const movieList = useAppSelector((state:RootState) => state.genreMovieList );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  
  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsId = searchParams.get("id") || STATIC_MOVIE_CATEGORIES[0].name;
  const paramsCategoryName = searchParams.get("category") || STATIC_MOVIE_CATEGORIES[0].id;
  
  useEffect( () => {
      dispatch(getGenreMovies( {paramsId, paramsPage} ));
  }, [searchParams, dispatch ] )

  return (
    <div className='home-list'>
      
      <div className='category-header' >
        <h1>{paramsCategoryName} MOVIES</h1>
        
      </div>
      <MovieList movies={movieList.movies} />

      <div className='page-buttons'>
          {paramsPage>1 && (<button
          onClick={()=> {
            const newPageNumber =  Number(paramsPage) -1 ;
            navigate(`/?category=${paramsCategoryName}&id=${paramsId}&page=${newPageNumber}`);
          } }
          >{`${paramsPage -1} <= ${paramsPage}`}</button>)}

          <button
            onClick={()=> {
              const newPageNumber =  Number(paramsPage) +1 ;
              navigate(`/?category=${paramsCategoryName}&id=${paramsId}&page=${newPageNumber}`);
            } }
          >{`${paramsPage}  => ${paramsPage +1}`}</button>   
        </div>

    </div>
  );
};

export default Home;