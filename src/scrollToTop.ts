import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
//@ts-ignore
const ScrollToTop = ({children}) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.search]);
  return children
}

export default ScrollToTop;