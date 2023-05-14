import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main St, New York, NY 10001</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Facebook</a></li>
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} Real Estate Website. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
