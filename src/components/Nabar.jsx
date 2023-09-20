import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { faPenToSquare, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the faSearch icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <a href="index.html" className="navbar-brand">Blog title</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href="index.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#0" className="nav-link dropdown-toggle active" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog<span className="visually-hidden">(current)</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="blogDropdown">
                <a href="index.html" className="dropdown-item active">List</a>
                <a href="blog-overview-grid.html" className="dropdown-item">Grid</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#0" className="nav-link dropdown-toggle" id="archiveDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Archive</a>
              <div className="dropdown-menu" aria-labelledby="archiveDropdown">
                <h6 className="dropdown-header">2017</h6>
                {/* ... (same dropdown items) ... */}
                <div className="dropdown-divider"></div>
                <h6 className="dropdown-header">2016</h6>
                {/* ... (same dropdown items) ... */}
              </div>
            </li>
            <li className="nav-item">
              <a href="#0" className="nav-link">About</a>
            </li>
          </ul>
          <form className="d-flex">
            <input type="text" name="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
              <span className="visually-hidden">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className='mx-3'>
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faPenToSquare} aria-hidden="true" />
            <span className="visually-hidden">Search</span>
          </button>
      </div>
      <div className='mx-3 dropdown'>
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faUser} aria-hidden="true" />
          <span className="visually-hidden">Search</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end mx-3" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#option1">Profile</a></li>
          <li><a className="dropdown-item" href="#option2">Login</a></li>
          <li><a className="dropdown-item" href="#option3">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
