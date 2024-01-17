import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="small bg-light custom--footer">
      <div className="container py-3 py-sm-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Quick links</h6>
            <ul className="list-unstyled">
            <li><a href="/">Home</a></li>
              <li><a href="#0" >Archive</a></li>
              <li><a href="#0">Categories</a></li>
              <li><a href="#0">Tag cloud</a></li>
              <li><a href="#0">Search</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li><a href="#0">About us</a></li>
              <li><a href="#0" >Authors</a></li>
              <li><a href="#0">Newsletter</a></li>
              <li><a href="#0">Advertising</a></li>
              <li><a href="#0">Sitemap</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Follow us</h6>
            <ul className="list-unstyled">
              <li><a href="#0"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="#0"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="#0"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#0"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
              <li><a href="#0"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Contact us</h6>
            <address>
              <strong>Blog Name</strong><br />
              Street name<br />
              ZIP code and city<br />
              <abbr title="Telephone">T:</abbr> <a href="tel:+1234567890">(123) 456-7890</a><br />
              <abbr title="Mail">M:</abbr> <a href="mailto:info@domain.com">info@domain.com</a>
            </address>
          </div>
        </div>
        <ul className="list-inline text-center">
          <li className="list-inline-item">&copy; {new Date().getFullYear()} Blogsphere Nepal</li>
          <li className="list-inline-item">All rights reserved.</li>
          <li className="list-inline-item"><a href="#0">Terms of use and privacy policy</a>.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
