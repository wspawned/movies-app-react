import "./style.css"

//@ts-ignore
const PersonAvatar = ({src,alt,id}) => {

  return(
  
    <img className="avatar" src={src} alt={alt} ></img>

  )
};

export default PersonAvatar;