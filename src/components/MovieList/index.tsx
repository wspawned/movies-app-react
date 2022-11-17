import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';


const MovieList = () => {

  const selectedMenuItemName = useSelector((state:RootState)=>state.general.selectedMenuItemName);

  const hello = Array(20).fill("X")

  return (
    <>
      <h1>{selectedMenuItemName}</h1>
      <h2>MOVIES</h2>
      
      <div className="home-list">
        {hello.map((elm, index) => {
          return (
            <div className="list-item" key={index}>
              {elm}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;