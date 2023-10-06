import { faSearch, faPenToSquare,faUser} from '@fortawesome/free-solid-svg-icons'; // Import the faSearch icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { Link } from 'react-router-dom';

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
                aria-labelledby="dropdownMenuButton"
              >
                <Link to="/write">
                  <li>
                    <a className="dropdown-item" href="#option1" style={{ textDecoration: 'none' }}> 
                      User Email
                    </a>
                  </li>
                </Link>
                <hr />
                <li>
                  <Link to="/myblogs">
                  <a className="dropdown-item" href="#option2" style={{ textDecoration: 'none' }}>
                    My Blogs
                  </a>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#option3">
                    Settings
                  </a>
                </li>
                <hr />
                <li>
                  <button className="btn btn-primary">
                    <a className="dropdown-item" href="#option3">
                      Logout
                    </a>
                  </button>
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
    </nav>
  );
};

export default Navbar;
