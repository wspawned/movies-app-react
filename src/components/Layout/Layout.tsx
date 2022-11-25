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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={ <Movie /> }></Route>
      </Routes>
      
    </>

  )
}

export default Layout;