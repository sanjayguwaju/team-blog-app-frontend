import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Card.css";

const BlogPost = ({title, content}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <br />
      <hr />
    </div>
  );
};

export default BlogPost;
