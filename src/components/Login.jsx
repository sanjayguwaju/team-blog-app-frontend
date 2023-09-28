
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Login.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [loginStatus, setLoginStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const data = Object.fromEntries(formData.entries());
    console.log("This is message", data);

    axios
      .post(`${process.env.SERVER_URL}/users/login`, data)
      .then((response) => {
        setLoginStatus('success');
      })
      .catch((error) => {
        if (error) {
          setLoginStatus('failure');
        }
      });
  };

  let message;
  if (loginStatus === 'success') {
    message = (
      <div className="alert alert-success" role="alert">
        Logged in successfully.
      </div>
    );
  } else if (loginStatus === 'failure') {
    message = (
      <div className="alert alert-danger" role="alert">
        Login failed. Please try again.
      </div>
    );
  }

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            {message}
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form1" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form2" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                   
                                </div>

                            </form>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Dont have an account?<Link to="/register">Sign up</Link></p>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* Copyright  */}
                    <div className="text-white mb-3 mb-md-0 text-center">
                        Copyright © 2020. All rights reserved.
                    </div>
                    {/* Copyright */}

                    {/* Right */}
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </div>
            </section>
        </>
    )
}

export default Login