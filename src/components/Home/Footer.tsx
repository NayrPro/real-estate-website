import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>At @Home, we are committed to providing our clients with exceptional service and expertise in the real estate industry. Our team of experienced agents has a deep understanding of the local market and can help you buy, sell, or rent properties with confidence.</p>
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
              <li className="list-inline-item"><a href="http://www.facebook.com"><span className="fa fa-facebook">
                </span><span>Facebook</span></a></li>
              <li className="list-inline-item"><a href="http://www.twitter.com"><span className="fa fa-twitter">
                </span><span>Twitter</span></a></li>
              <li className="list-inline-item"><a href="http://www.instagram.com"><span className="fa fa-instagram">
                </span><span>Instagram</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div>
            <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} @Home. Made by NayrPro.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
