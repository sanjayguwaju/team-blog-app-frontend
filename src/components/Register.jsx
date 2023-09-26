import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom';

const Register = () => {
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        axios
            .post(`${process.env.SERVER_URL}/users/register`, data)
            .then((response) => {
                if(response) {
                    setRegistrationStatus("success");
                }
            })
            .catch((error) => {
                if (error) {
                    setRegistrationStatus("failure");
                }
            });
    };

    let message;
    if (registrationStatus === "success") {
        message = (
            <div className="alert alert-success" role="alert">
                Successfully registered!
            </div>
        );
    } else if (registrationStatus === "failure") {
        message = (
            <div className="alert alert-danger" role="alert">
                Registration failed. Please try again.
            </div>
        );
    }

    return (
        <>
            <div className="d-flex align-items-center" style={{ height: "100vh" }}>
                <div className="card text-black m-5" style={{ borderRadius: "25px" }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">
                                <h1 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Register Account
                                </h1>

                                {message}

                                <form
                                    onSubmit={handleSubmit}
                                    className="d-flex flex-column align-items-center"
                                >
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user me-3"></i>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="form1"
                                            name="name"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope me-3"></i>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="form2"
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock me-3"></i>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="form3"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>

                                    {/* <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key me-3"></i>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="form4"
                                            name="repeatPassword"
                                            placeholder="Repeat your password"
                                        />
                                    </div> */}
                                    <button type="submit" className="btn btn-primary mb-4 mx-auto">
                                        Register
                                    </button>
                                </form>
                                
                                <p className="text-center">
                                    Already have an account? <Link to="/login">Login here</Link>
                                </p>
                            </div>
                            <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid"
                                    alt="Registration Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;