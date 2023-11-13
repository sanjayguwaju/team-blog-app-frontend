import { faSearch, faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the faSearch icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container">
        <Link to={`/`} className="navbar-brand"><strong>Blogsphere Nepal</strong></Link>
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
                <div className="dropdown-divider"></div>
                <h6 className="dropdown-header">2016</h6>``
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

          <div className="d-flex">
            <div className="mx-3 d-flex">
              <Link to="/write" className="mx-3">
                <button className="btn btn-primary">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                </button>
              </Link>
              <div className="mx-3 dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                  <span className="visually-hidden">Search</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end mx-3"
                  aria-labelledby="dropdownMenuButton">
                  <li className="dropdown-item">
                    User Email
                  </li>
                  <hr />
                  <li className="dropdown-item">
                    <Link to="/myblogs" style={{ color: 'black' }}>
                      My Blogs
                    </Link>
                  </li >
                  <li className="dropdown-item">
                    Settings
                  </li>
                  <hr />
                  <li className="dropdown-item" style={{ textAlign: 'center' }}>
                    <button className="btn btn-primary">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/register" className="mx-3">
              <button className="btn btn-primary">
                Register
              </button>
            </Link>
            <Link to="/login" className="mx-3">
              <button className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <form className="d-flex">
      <input
      type="text"
      name="search"
      className="form-control full-width-input me-2"
      placeholder="Search"
      aria-label="Search" />
        <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} aria-hidden="true" /><span className="visually-hidden">Search</span></button>
      </form> */}
    </nav>
  );
};

export default Navbar;
