import { PersonType } from "../../redux/actions/getPerson";
import './style.css';

const PersonInfo:React.FC<{person:PersonType}> = ({person}) => {

  const {name, biography, birthday, deathday, profile_path, } = person;
  const base_url:string = 'https://image.tmdb.org/t/p/';

  return (
    <div className="person-info">
      <div className="artwork">
        <img src={`${base_url}w342${profile_path}`} alt={`${name} Poster`} />
      </div>

      <div className="summary">
        <p>{`  ${name}  `}</p>
        <p>{`  ${birthday} / ${deathday}  `}</p>

        <p>ABOUT</p>
        <p>{`  ${biography}  `}</p>

        {/* <p>
          <a href={`${homepage}`}>Website</a>
        </p>
        <p>
          <a href={`${IMDB_base_url + imdb_id}`}>IMDB</a>
        </p> */}
      </div>
    </div>
  );
};

export default PersonInfo;

//   https://image.tmdb.org/t/p/w780/fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg