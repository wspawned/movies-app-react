import { PersonType } from "../../redux/actions/getPerson";
import './style.css';

const PersonInfo:React.FC<{person:PersonType}> = ({person}) => {

  const {name, biography, birthday, deathday, profile_path, } = person;
  const base_url:string = 'https://image.tmdb.org/t/p/';
  // const nameUpper = name.toUpperCase();

  return (
    <div className="person-info">

      <div className="artwork">
        <img src={`${base_url}w342${profile_path}`} alt={`${name} Poster`} />
      </div>

      <div className="person-summary">
        <div className="header-container" >
          <h1>{`  ${name?.toUpperCase()}  `}</h1>
          <p>{(!deathday)? `${birthday}` : `${birthday} / ${deathday}` }</p>
        </div>

        <h3>THE BIOGRAPHY</h3>

        <div className="bio-container" >
          <p className="bio" >{`${biography}`}</p>
        </div>

      </div>
    </div>
  );
};

export default PersonInfo;

//   https://image.tmdb.org/t/p/w780/fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg