import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <button type="submit" className="btn btn-primary"><i className="fas fa-search" aria-hidden="true"></i><span className="visually-hidden">Search</span></button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
