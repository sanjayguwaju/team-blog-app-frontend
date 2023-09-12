const PopularAndRecentCard = () => {
  return (
    <div className="col-3">
      <h2 className="mb-3">Popular posts</h2>
      <div className="list-group mb-3">
        <a href="#0" className="list-group-item list-group-item-action">
          <div className="badge badge-primary float-right">Category</div>
          <h5>Blog post title</h5>
          <p className="small mb-2">Author Name (<time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
          <div className="small mb-2">
            <span className="badge badge-primary"><i className="fa fa-thumbs-up" aria-hidden="true"></i> 13 <span className="sr-only">likes</span></span>
            <span className="badge badge-primary"><i className="fa fa-comments" aria-hidden="true"></i> 3 <span className="sr-only">comments</span></span>
          </div>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        {/* Repeat this block for other popular posts */}
      </div>
      <h2 className="mb-3">Recent posts</h2>
      <div className="list-group mb-3">
        <a href="#0" className="list-group-item list-group-item-action">
          <div className="badge badge-primary float-right">Category</div>
          <h5>Blog post title</h5>
          <p className="small mb-2">Author Name (<time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
          <div className="small mb-2">
            <span className="badge badge-primary"><i className="fa fa-thumbs-up" aria-hidden="true"></i> 13 <span className="sr-only">likes</span></span>
            <span className="badge badge-primary"><i className="fa fa-comments" aria-hidden="true"></i> 3 <span className="sr-only">comments</span></span>
          </div>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        {/* Repeat this block for other recent posts */}
      </div>
    </div>
  );
}

export default PopularAndRecentCard;
