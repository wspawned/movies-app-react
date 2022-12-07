import React, { PropsWithChildren, useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import './style.css';


const TrailerModal:React.FC <PropsWithChildren & {closeModal: () => void} > = ({ children, closeModal }) => {

  const elRef = useRef< HTMLElement | null > (null)  ;
  // as React.MutableRefObject< HTMLElement | null >

  if (!elRef.current) {
    
    elRef.current = document.createElement("div") ;
  }
//@ts-ignore
  useEffect(() => {
    const modalRoot = document.getElementById("modal-trailer")! as HTMLElement;
    //@ts-ignore
    modalRoot.appendChild(elRef.current);
    //@ts-ignore
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div className="modal-trailer" onClick={()=>closeModal()} > {children} </div>, elRef.current);
};

export default TrailerModal;
//@ts-ignore