import "./style.css"


const PersonAvatar:React.FC<{src:string,alt:string,id:number}> = ({src,alt,id}) => {

  return(
  
    <img className="avatar" src={src} alt={alt} ></img>

  )
};

export default PersonAvatar;