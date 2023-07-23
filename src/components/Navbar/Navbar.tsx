import { useState, useEffect } from "react";
import './Navbar.scss';
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../Store/store";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { createAsyncLogout } from "../../Store/reducers/userReducer";

const Navbar: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const user = useAppSelector((state : RootState) => state.user.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(()=>{
    setWindowSize(window.innerWidth)
    if(windowSize > 700) setshowMenu(false);
  }, [windowSize]);

  const handleClick = (e) => {
      (!showMenu && windowSize < 700) ? setshowMenu(true) : setshowMenu(false);
  };

  const refreshPage = () => {
    navigate(0);
  }

  const timeout = () => setTimeout(refreshPage, 1000);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo navbar__link">@Home</Link>
      <button className="navbar__dropdown" onClick={(e) => handleClick(e)}  style={{display: windowSize<700? "block" : "none"}}><span id="menuButton"className="material-symbols-outlined">menu</span></button>
      <div id="menuList" className={!showMenu ? "navbar__list" : "navbar__list__column"} style={{display: windowSize>700? "flex" : "none"}} onClick={(e) => handleClick(e)}>
        {
          Object.keys(user).length > 1 &&
          <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
            <Link to="/account" className="navbar__link">Account</Link>
          </div>
        }
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/buyorrent" className="navbar__link">Properties</Link>
        </div>
        {
          (Object.keys(user).length > 1 && (user.user.seller || user.user.admin)) && 
          <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
            <Link to="/sell" className="navbar__link">Sell</Link>
          </div>
        }
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/blog" className="navbar__link">Blog</Link>
        </div>
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/aboutus" className="navbar__link">About Us</Link>
        </div>
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/contactus" className="navbar__link">Contact Us</Link>
        </div>
        {
          Object.keys(user).length < 1 &&
          <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
            <Link to="/login" className="navbar__link">Login</Link>
          </div>
        }
        {
          Object.keys(user).length < 1 &&
          <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
            <Link to="/signup" className="navbar__link">Signup</Link>
          </div>
        }
        {
          Object.keys(user).length > 1 &&
          <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
            <Link to="/" className="navbar__link" onClick={() => {dispatch(createAsyncLogout(user)); timeout()} }>Logout</Link>
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
