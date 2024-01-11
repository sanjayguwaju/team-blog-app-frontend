import { useEffect, useState} from "react";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../features/api/apiSlice";
import {
  setUser,
  setUserId,
  clearUser,
  setUserFailed,
} from "../../../redux/slices/userSlice/index";

const Login = () => {
  const [login, { data, isError, isLoading }] = useLoginMutation();
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData.entries());
    try {
      await login(credentials);
    } catch (error) {
      console.error(error);
      setLoginStatus(false);
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("currentUserID", data.userId);
      dispatch(setUserId(data?.userId));
      dispatch(setUser(data?.email));
      setLoginStatus(true);
      navigate("/");
    }
    if (isError) {
      setLoginStatus(false);
    }
  }, [data, isError]);

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-auto">
          <div className="row row_first d-flex justify-content-center align-items-center">
            <div className=" col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="hero_image img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="section-form col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="signin-section d-flex flex-row align-items-center justify-content-center justify-content-lg-start mt-5 mt-md-0">
                <p className="hero_text lead fw-normal mb-0 me-3">
                  Sign in with
                </p>
                <button
                  type="button"
                  className="icon_button btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button
                  type="button"
                  className="icon_button btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button
                  type="button"
                  className="icon_button btn btn-primary btn-floating mx-1"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </div>
              <div className="divider d-flex align-items-center mt-3 mt-sm-4 mb-4 mb-sm-5">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <form
                className="ms-md-0 ms-3 me-3 me-md-0"
                onSubmit={handleSubmit}
              >
                {/* Email input */}
                <div className="hero_text d-flex flex-row align-items-center mb-4">
                  <label
                    className="form-label custom-label"
                    htmlFor="form3Example3"
                    style={{ width: "160px" }}
                  >
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a email address"
                  />
                </div>
                {/* Password input */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <label
                    className="form-label custom-label"
                    htmlFor="form3Example4"
                    style={{ width: "160px" }}
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>
                <div className="checkbox_text   align-items-center mt-4  d-flex justify-content-between">
                  {/* Checkbox */}
                  <div className="form-check mt-4 mt-sm-0 mb-3 mb-sm-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="d-flex flex-column align-items-center mb-4 mt-4 ">
                  <button
                    type="submit"
                    className="hero_button btn btn-primary btn-lg"
                  >
                    Login
                  </button>
                  <span>
                    {" "}
                    <p className="register-text d-flex small fw-bold  mt-4 mt-sm-3 mt-xl-4 pt-1 ms-4 mb-0">
                      Don't have an account?
                      <Link to="/register" className="link-danger ms-2">
                        Register
                      </Link>
                    </p>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-primary mt-4 mt-md-0">
            {/* Copyright */}
            <div className="footer_text text-white mb-3 mb-md-0 text-center">
              Copyright © 2020. All rights reserved.
            </div>
            {/* Right */}
            <div>
              <a href="#!" className=" me-4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a href="#!" className=" me-4">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#ffffff" }}
                />
              </a>
              <a href="#!" className="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#ffffff" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
