import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import './style.css';

//@ts-ignore
const TrailerModal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    //@ts-ignore
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal-trailer");
    //@ts-ignore
    modalRoot.appendChild(elRef.current);
  }, []);
//@ts-ignore
  return createPortal(<div className="modal-trailer" > {children} </div>, elRef.current);
};

export default TrailerModal;