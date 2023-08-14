import { useEffect, useState } from "react";
// custom hooks that checks the scroll y position and determines whether to show the black background in nav bar or not
const useWindowScroll = () => {
  const [show, setShow] = useState(false);
  const fnHandleScroll = () => {
    if (window.scrollY >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fnHandleScroll);

    // removing the event listener when component unMounts
    return () => window.removeEventListener("scroll", fnHandleScroll);
  }, []);

  return show;
};
export default useWindowScroll;
