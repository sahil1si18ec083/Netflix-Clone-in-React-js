import { navLogo, navAvatar } from "../Constants";
import useWindowScroll from "../Custom-Hooks/useWindowScroll";
import "./Nav.css";
const Nav = () => {
  const navBarBlackBackgroundVisibility = useWindowScroll();

  return (
    <>
      <div
        className={
          "nav" + (navBarBlackBackgroundVisibility ? " nav_black" : "")
        }
      >
        <div className="nav_contents">
          <img className="nav_logo" src={navLogo} alt="netflix_logo" />
          <img
            className="nav_avatar"
            src={navAvatar}
            alt="netflix_avatar_logo"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
