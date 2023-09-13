const Newsletter = () => {
  return (
    <div className="card">
      <div className="card-body bg-light">
        <h5 className="card-title">Signup for our newsletter</h5>
        <form>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-left">
                @
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              aria-describedby="addon-left"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
