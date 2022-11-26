import PersonAvatar from "./PersonAvatar/PersonAvatar";
import './style.css';

//@ts-ignore
const Cast = ({cast,base_url}) => {

  const castLimited = (cast.length > 8) ? cast.slice(0,8) : cast ;

  return (
    
    <div className="cast" >
      <p>THE CAST</p>
      {/*//@ts-ignore */}
      {castLimited.map((person)=>{return(
        <PersonAvatar 
        src={`${base_url}w185${person.profile_path}`}
        alt={person.name}
        id={person.id}
        />
      )})}
    </div>
   
    
  )
};

export default Cast;

//https://image.tmdb.org/t/p/w185/cgoy7t5Ve075naBPcewZrc08qGw.jpg