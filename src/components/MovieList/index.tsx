import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './style.css';


const MovieList = () => {

  const selectedMenuItemName = useSelector((state:RootState)=>state.general.selectedMenuItemName);

  const hello = Array(20).fill("X")

  return (
    <>
    <h2>{selectedMenuItemName}</h2>
    {hello.map((elm, index)=>{
      return <div key={index} >{elm}</div>
    })}
    </>
  )
};

export default MovieList;