import "./Card.css";

const BlogPost = ({title, content}) => {
  return (
    <>
      <div className="container my-3 my-sm-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
          <h2 className="mb-3">Latest posts</h2>
          <article className="mb-3">
            <header className="mb-2">
              <span className="badge bg-primary">Category</span>
              <h1><a href="blog-post-text.html">{title}</a></h1>
              <div><a href="#0">Author Name</a></div>
              <div className="small">Posted on: <time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time></div>
              <div className="small">
                <span className="badge bg-primary"><i className="fa fa-thumbs-up" aria-hidden="true"></i> 13 <span className="sr-only">likes</span></span>
                <span className="badge bg-primary"><i className="fa fa-comments" aria-hidden="true"></i> 3 <span className="sr-only">comments</span></span>
              </div>
              <div className="small">
                <a href="#0" className="badge bg-secondary">#tag</a>
                <a href="#0" className="badge bg-secondary">#longtag</a>
                <a href="#0" className="badge bg-secondary">#tag</a>
                <a href="#0" className="badge bg-secondary">#longertag</a>
                <a href="#0" className="badge bg-secondary">#tag</a>
                <a href="#0" className="badge bg-secondary">#verylongtag</a>
              </div>
            </header>
            <figure className="figure">
              <img src="http://placehold.it/800x600" className="figure-img img-fluid" alt="Figure image" />
              <figcaption className="figure-caption small">
                <p className="mb-0"><i className="fa fa-camera" aria-hidden="true"></i><span className="sr-only">Photo by:</span> Artist Name</p>
              </figcaption>
            </figure>
            <p>{content}</p>
            <a href="blog-post-text.html" className="btn btn-primary">Read more</a>
          </article>
          <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
