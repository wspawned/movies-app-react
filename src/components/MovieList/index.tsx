import './style.css';

const MovieList = () => {

  const hello = Array(20).fill("X")

  return (
    <>
    {hello.map((elm, index)=>{
      return <div key={index} >{elm}</div>
    })}
    </>
  )
};

export default MovieList;