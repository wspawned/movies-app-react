import './style.css';
import { getGenres } from '../../redux/actions/getGenres';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';

  type genre = {
    id:number,
    name:string,
  };
  type genres = genre[];


function Menu() {

  const dispatch = useAppDispatch();
  useEffect(()=>{
    // @ts-ignore
    dispatch(getGenres());
  }, [dispatch] );

  const genres:genres = useAppSelector((state:RootState) => state.general.genres);
  const staticCategories = useAppSelector((state:RootState) => state.general.staticCategories);

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