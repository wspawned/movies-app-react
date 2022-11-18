import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const MovieList = () => {

  const selectedMenuItemName = useSelector((state:RootState)=>state.general.selectedMenuItemName);

  const hello = Array(20).fill("X")

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${selectedMenuItemName}`)

  }, [selectedMenuItemName] )


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