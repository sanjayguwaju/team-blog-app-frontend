const Register = () => {
    return (
        <div className="container-fluid">

            <div className="card text-black m-5" style={{ borderRadius: '25px' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">

                            <h1 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user me-3"></i>
                                <input type="text" className="form-control" id="form1" placeholder="Your Name" />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope me-3"></i>
                                <input type="email" className="form-control" id="form2" placeholder="Your Email" />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock me-3"></i>
                                <input type="password" className="form-control" id="form3" placeholder="Password" />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-key me-3"></i>
                                <input type="password" className="form-control" id="form4" placeholder="Repeat your password" />
                            </div>

                            <div className="mb-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Subscribe to our newsletter
                                    </label>
                                </div>
                            </div>

                            <button className="btn btn-primary mb-4">Register</button>

                        </div>

                        <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Registration Image" />
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Register