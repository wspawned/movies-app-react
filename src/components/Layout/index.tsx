import Home from '../Home/Home';
import Menu from '../Menu';
import Movie from '../Movie/Movie';
import { Route, Routes } from 'react-router-dom';
import { getGenres } from '../../redux/actions/getGenres';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';

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