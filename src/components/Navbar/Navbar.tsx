import { useState, useEffect } from "react";
import './Navbar.scss';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const [dropArrow, setDropArrow] = useState<string>("up");
  
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
    setDropArrow("up")
  }, [windowSize]);

  const handleClick = (e) => {
    if(e.target.id == "services"){
      (dropArrow == "up") ? setDropArrow("down") : setDropArrow("up");
    }else{
      (!showMenu && windowSize < 700) ? setshowMenu(true) : setshowMenu(false);
      (dropArrow == "down") && setDropArrow("up");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo navbar__link" onClick={(e) => handleClick(e)}>@Home</Link>
      <button className="navbar__dropdown" onClick={(e) => handleClick(e)}  style={{display: windowSize<700? "block" : "none"}}><span id="menuButton"className="material-symbols-outlined">menu</span></button>
      <div id="menuList" className={!showMenu ? "navbar__list" : "navbar__list__column"} style={{display: windowSize>700? "flex" : "none"}} onClick={(e) => handleClick(e)} >
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"} id="servicesParent">
          <a id="services" className="navbar__link" onClick={(e) => handleClick(e)}>Services
          </a>
          <span className="material-symbols-outlined">{dropArrow == "up" ? "arrow_drop_up" : "arrow_drop_down"}</span>
        </div>
        { (dropArrow == 'down' && windowSize < 700) &&
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/buyorrent" className="navbar__link">Buy/Rent</Link>
        </div>
        }
        { (dropArrow == 'down' && windowSize < 700) &&
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
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/login" className="navbar__link">Login</Link>
        </div>
        <div className={!showMenu ? "navbar__item" : "navbar__item__column"}>
          <Link to="/signup" className="navbar__link">Signup</Link>
        </div>
      </div>

      { (dropArrow == "down" && windowSize>700) &&
        <div className='navbar__services' onClick={(e) => handleClick(e)}>
        <div className="navbar__item__column">
          <Link to="/buyorrent" className="navbar__link">Buy/Rent</Link>
        </div>
        <div className="navbar__item__column">
          <Link to="/sell" className="navbar__link">Sell</Link>
        </div>
      </div>}
    </nav>
  );
};

export default Navbar;
