import { useDispatch } from 'react-redux';
import { tmdbAPI } from '../api/tmdbAPI';



export async function getGenres(dispatch:any) {

  const res = await tmdbAPI.get('/3/genre/movie/list');

  dispatch({
    type:"FETCH_GENRES",
    payload: res.data,
  });  

  console.log(res);
};



