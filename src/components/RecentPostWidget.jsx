const RecentPostWidget = () => {
  return (
    <>
      <figure className="figure">
        <a href="blog-post-text.html" className="figure-img">
          <img
            src="http://placehold.it/800x600"
            className="img-fluid"
            alt="Recent Post"
          />
        </a>
        <figcaption className="figure-caption">
          <h4>
            <a href="blog-post-text.html">Text blog post title</a>
          </h4>
          <div className="small">
            Posted on: <time dateTime="2017-03-12T10:24">March 12, 2017</time>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default RecentPostWidget;
