const CommentSection = () => {
  return (
    <div className="col-12">
      <div className="container">
        <h2>Comments</h2>
        <div className="media d-flex">
          <img src="https://placehold.it/64x64" alt="Media object image" className="mx-3 my-2 mb-5" />
          <div className="media-body">
            <p><a href="mailto:example@domain.com">Author Name</a> (Posted on: <time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu bibendum massa euismod scelerisque. Morbi porttitor tellus tempor metus posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;


