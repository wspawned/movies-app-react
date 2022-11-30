import { useNavigate } from "react-router-dom";
import "./style.css"


const PersonAvatar:React.FC<{src:string,alt:string,id:number}> = ({src,alt,id}) => {

  const navigate = useNavigate();

  return(
  
    <img className="avatar" src={src} alt={alt} 
    onClick={()=> {
      navigate( `/person/?id=${id}` );
    }}
    ></img>

  )
};

export default PersonAvatar;