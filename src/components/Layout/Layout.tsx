import { Route, Router, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from '../Home/Home';
import Menu from '../Menu';
import Movie from '../Movie/Movie';
import { getGenres } from '../../redux/actions/getGenres';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { setSelectedMenuItem, STATIC_MOVIE_CATEGORIES } from '../../redux/slices/generalSlice';

//@ts-ignore

const Layout = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  

  const selectedMenuItem = useAppSelector((state:RootState)=>state.general.selectedMenuItem) ;
  const movieList = useAppSelector((state:RootState) => state.movieList );
  const movie = useAppSelector((state:RootState) => state.movie );

  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect( () => {
    


    const paramsPage = Number(searchParams.get("page"));
    const paramsId = searchParams.get("id");
    const paramsCategory = searchParams.get("category");

      
    if(location.pathname.includes("movie")) {
      return
    } else { 
      if( paramsId===null && paramsPage===0 ) {
        setSearchParams({category:`${STATIC_MOVIE_CATEGORIES[0].name}`,id: `${STATIC_MOVIE_CATEGORIES[0].id}`, page:`${movieList.page}`});
        dispatch(setSelectedMenuItem({name:`${STATIC_MOVIE_CATEGORIES[0].name}`,id: `${STATIC_MOVIE_CATEGORIES[0].id}`}));
      } else if ( paramsId && paramsPage ) {
        setSearchParams({category:`${paramsCategory}`,id: `${paramsId}`, page:`${paramsPage}`});
      } else return;
     };

  }, [searchParams] )


  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={ <Movie /> }></Route>
      </Routes>
      
    </>

  )
}

export default Layout;