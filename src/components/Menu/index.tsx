import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import type { RootState } from '../../store';
import { getGenres } from '../../actions/getGenres';
import { useEffect } from 'react';




  type genre = {
    id:number,
    name:string,
  };
  type genres = genre[];


function Menu() {

  const dispatch = useDispatch();
  useEffect(()=>{
    // @ts-ignore
    dispatch(getGenres());
  }, [dispatch] );

  const genres:genres = useSelector((state:RootState) => state.general.genres);
  const staticCategories = useSelector((state:RootState) => state.general.staticCategories);

  return (
    <div className="side-drawer">
      <p>ı am the side drawer</p>

      <h2>Discover</h2>
      {staticCategories.map((category:any) => {
        return <p key={category.id}>{category.name}</p>;
      })}

      <h2>Genres</h2>
      {genres.map((genre:genre)=>{
        return <p key={genre.id} >{genre.name}</p>
      })}
    </div>
  );
}

export default Menu;