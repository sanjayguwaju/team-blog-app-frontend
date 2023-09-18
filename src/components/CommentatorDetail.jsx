const CommentatorDetail = () => {
    return (
      <div className="col-6">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
                </div>
            <br/>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>    
                  <input type="email" className="form-control" placeholder="example@email.com" id="email" name="email" required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Your comment:</label>
              <textarea className="form-control" id="comment" name="comment" rows="5" placeholder="Write your comment here. Maximum 500 characters." required></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-danger">Reset</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CommentatorDetail;
  
  
