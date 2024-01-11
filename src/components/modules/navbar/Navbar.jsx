import { useEffect, useState} from "react";
import {
  faSearch,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import the faSearch icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/userSlice/index";
import { useGetBlogsQuery, useSearchBlogPostsQuery } from '../../../features/api/apiSlice';
import { setBlogData } from "../../../redux/slices/blogDataSlice/index";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [skipSearch, setSkipSearch] = useState(true);
  const { data: searchResults, refetch: refetchSearch } = useSearchBlogPostsQuery(searchTerm, { skip: skipSearch });
  const { data: allBlogs, refetch: refetchAllBlogs } = useGetBlogsQuery();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm === "") {
      refetchAllBlogs().then(({ data }) => {
        if (data) {
          dispatch(setBlogData(data));
        }
      });
    }
  }, [searchTerm, dispatch, refetchAllBlogs]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      setSkipSearch(false);
      refetchSearch().then(({ data }) => {
        if (data) {
          dispatch(setBlogData(data));
        }
      });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken"); // If you're using an access token, remove it from local storage
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <Link to={`/`} className="navbar-brand">
            <strong>Blogsphere Nepal</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#0"
                  className="nav-link dropdown-toggle active"
                  id="blogDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog<span className="visually-hidden">(current)</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="blogDropdown">
                  <a href="index.html" className="dropdown-item active">
                    List
                  </a>
                  <a href="blog-overview-grid.html" className="dropdown-item">
                    Grid
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#0"
                  className="nav-link dropdown-toggle"
                  id="archiveDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Archive
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="archiveDropdown"
                >
                  <h6 className="dropdown-header">2017</h6>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">2016</h6>``
                </div>
              </li>
              <li className="nav-item">
                <a href="#0" className="nav-link">
                  About
                </a>
              </li>
            </ul>
            <form className="d-none d-md-none d-lg-flex" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                <span className="visually-hidden">Search</span>
              </button>
            </form>

            {user?.status === "succeeded" && (
              <div className="button__container d-flex justify-content-between">
                <div className="button_container_left">
                  <Link to="/write" className="mx-3">
                    <button className="btn btn-primary">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        aria-hidden="true"
                        style={{ color: "white" }}
                      />
                    </button>
                  </Link>
                </div>
                <div className="button_container_right">
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
                    <li className="dropdown-item">
                      {user?.user || "test@gmail.com"}
                    </li>
                    <hr />
                    <li className="dropdown-item">
                      <Link to="/myblogs" style={{ color: "black" }}>
                        My Blogs
                      </Link>
                    </li>
                    <li className="dropdown-item">Settings</li>
                    <hr />
                    <li
                      className="dropdown-item"
                      style={{ textAlign: "center" }}
                    >
                      <button
                        className="btn btn-primary"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {user?.status !== "succeeded" && (
              <div className="d-flex justify-content-between">
                <Link to="/register" className="mx-3">
                  <button className="btn btn-primary">Register</button>
                </Link>
                <Link to="/login" className="mx-3">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="mx-2 my-2 d-block d-md-block d-lg-none">
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            className="form-control full-width-input me-2"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
            <span className="visually-hidden">Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
