import { useState } from "react";
import TrailerModal from "./TrailerModal";
import type { VideoResultType } from "../../../redux/actions/getMovie";
import './style.css';

const Trailer:React.FC<{videos:VideoResultType[]}> = ({videos}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {setShowModal(true)};
  const closeModal = () => {setShowModal(false)};

  if(videos?.length===0) {
    return null;
  }

  const { key: videoId } = videos?.find(video => video.type === 'Trailer' && video.site === 'YouTube') || {};

  return (
    <>
      <button onClick={()=> openModal()} >Trailer</button>
      {
        showModal ?
        <TrailerModal
        closeModal={closeModal}
        >
          <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          title="Trailer"
          allowFullScreen
          
          />
        </TrailerModal> :
        null
      }
    </>
  )
};

export default Trailer;