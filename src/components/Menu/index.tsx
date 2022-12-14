import './style.css';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';


function Menu() {

  const navigate = useNavigate();

  const genres = useAppSelector((state: RootState) => state.general.genres);
  const staticCategories = useAppSelector((state: RootState) => state.general.staticCategories);

  return (
    <div className="side-drawer">
      <h2>Discover</h2>
      {staticCategories.map((category) => {
        return (
          <div className='side-drawer-item'
            onClick={() => {
              navigate(`/?category=${category.name}&id=${category.id}&page=1`);
            }}
            key={category.id}
          >
            {category.name}
          </div>
        );
      })}

      <h2>Genres</h2>
      {genres.map((genre) => {
        return (
          <div className='side-drawer-item'
            onClick={() => {
              navigate(`/?category=${genre.name}&id=${genre.id}&page=1`);
            }}
            key={genre.id}
          >
            {genre.name}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;