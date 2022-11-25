import './style.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { setSelectedMenuItem } from '../../redux/slices/generalSlice';
import { resetPage } from '../../redux/slices/movieListSlice';
import { useNavigate } from 'react-router-dom';







function Menu() {

  const navigate = useNavigate();

  const genres = useAppSelector((state: RootState) => state.general.genres);
  const staticCategories = useAppSelector((state: RootState) => state.general.staticCategories);

  const dispatch = useAppDispatch();

  type genre = {
    id: number;
    name: string;
  };
  type genres = genre[];


  return (


    <div className="side-drawer">
      <h2>Discover</h2>
      {staticCategories.map((category: any) => {
        return (
          <p
            onClick={() => {
              navigate(`/?category=${category.name}&id=${category.id}&page=1`);
              dispatch(setSelectedMenuItem({name:category.name, id:category.id}));
              dispatch(resetPage());
            }}
            key={category.id}
          >
            {category.name}
          </p>
        );
      })}

      <h2>Genres</h2>
      {genres.map((genre:genre) => {
        return (
          <p
            onClick={() => {
              navigate(`/?category=${genre.name}&id=${genre.id}&page=1`);
              dispatch(setSelectedMenuItem({name:genre.name, id:genre.id}));
              dispatch(resetPage());
            }}
            key={genre.id}
          >
            {genre.name}
          </p>
        );
      })}
    </div>

  );
}

export default Menu;