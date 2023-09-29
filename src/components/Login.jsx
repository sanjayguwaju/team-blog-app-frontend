import React, { useState } from 'react';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
    const [loginStatus, setLoginStatus] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        axios
            .post(`${process.env.SERVER_URL}/users/login`, data)
            .then(response => {
                localStorage.setItem('accessToken', response.data.accessToken);
                if (response) {
                    setLoginStatus(true);
                }
            })
            .catch(error => {
                console.log(error);
                setLoginStatus(false);
            });
    };
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
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
                            <form onSubmit={handleSubmit}>
                                {/* Email input */}
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <label className="form-label custom-label" htmlFor="form3Example3" style={{ width: '150px' }}>Email address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>
                                {/* Password input */}
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <label className="form-label custom-label" htmlFor="form3Example4" style={{ width: '150px' }}>Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                        {/* Copyright */}
                        <div className="text-white mb-3 mb-md-0 text-center">
                            Copyright © 2020. All rights reserved.
                        </div>
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
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;