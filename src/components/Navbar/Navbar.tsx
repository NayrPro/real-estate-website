import './Navbar.scss';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">@Home</div>
      <ul className="navbar__list">
        <li className="navbar__item">
          {/* <a href="/" className="navbar__link">Home</a> */}
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          {/* <a href="/buy" className="navbar__link">Buy</a> */}
          <Link to="/services" className="navbar__link">Services</Link>
        </li>
        <li className="navbar__item">
          {/* <a href="/blog" className="navbar__link">Blog</a> */}
          <Link to="/blog" className="navbar__link">Blog</Link>
        </li>
        <li className="navbar__item">
          {/* <a href="/contact" className="navbar__link">Contact Us</a> */}
          <Link to="/aboutus" className="navbar__link">About Us</Link>
        </li>
        <li className="navbar__item">
          {/* <a href="/contact" className="navbar__link">Contact Us</a> */}
          <Link to="/contactus" className="navbar__link">Contact Us</Link>
        </li>
        <li className="navbar__item">
          {/* <a href="/login" className="navbar__link">Login/Signup</a> */}
          <Link to="/login" className="navbar__link">Login</Link>
        </li>
        <li className="navbar__item">
          {/* <a href="/signup" className="navbar__link">Signup</a> */}
          <Link to="/signup" className="navbar__link">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
