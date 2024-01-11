import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="small bg-light">
      <div className="container py-3 py-sm-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Quick links</h6>
            <ul className="list-unstyled">
              <li><a href="/" style={{ textDecoration: 'none' }}>Home</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Archive</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Categories</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Tag cloud</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Search</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li><a href="#0" style={{ textDecoration: 'none' }}>About us</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Authors</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Newsletter</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Advertising</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}>Sitemap</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Follow us</h6>
            <ul className="list-unstyled">
              <li><a href="#0" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
              <li><a href="#0" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Contact us</h6>
            <address>
              <strong>Blog Name</strong><br />
              Street name<br />
              ZIP code and city<br />
              <abbr title="Telephone">T:</abbr> <a href="tel:+1234567890" style={{ textDecoration: 'none' }}>(123) 456-7890</a><br />
              <abbr title="Mail">M:</abbr> <a href="mailto:info@domain.com" style={{ textDecoration: 'none' }}>info@domain.com</a>
            </address>
          </div>
        </div>
        <ul className="list-inline text-center">
          <li className="list-inline-item">&copy; {new Date().getFullYear()} Blogsphere Nepal</li>
          <li className="list-inline-item">All rights reserved.</li>
          <li className="list-inline-item"><a href="#0" style={{ textDecoration: 'none' }}>Terms of use and privacy policy</a>.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
