import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import CommentSection from "./CommentSection"

const BlogPost = ({id,title,content,image,createdAt,author,ShowReadMore,showTrimmedPost,showCommentSection}) => {
  const date = moment(createdAt).toDate();
  const formattedDate = date.toLocaleDateString("en-US");
  let summary = "";
    if (typeof content === "string") {
      const words = content.split(" ");
      summary = words.slice(0, 50).join(" ");
    }
    return (
      <>
          <h2 className="mb-3">Latest posts</h2>
          <article className="mb-3">
            <header className="mb-2">
              <span className="badge bg-primary">Category</span>
              <h1><Link to={`/getpostbyid/${id}`}>{title}</Link></h1>
              <div><a href="#0">{author}</a></div>
              <div className="small">Posted on: {formattedDate}</div>
              <div className="small">
                  <span className="badge bg-primary">
                    <FontAwesomeIcon icon={faThumbsUp} /> 13 <span className="visually-hidden">likes</span>
                  </span>
                  <span className="badge bg-primary">
                    <FontAwesomeIcon icon={faComments} /> 3 <span className="visually-hidden">comments</span>
                  </span>
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
              <img src={image} className="figure-img img-fluid" alt="Figure image" />
              <figcaption className="figure-caption small">
                <p className="mb-0"><i className="fa fa-camera" aria-hidden="true"></i><span className="sr-only">Photo by:</span> Artist Name</p>
              </figcaption>
            </figure>
            <div>
              {showTrimmedPost ? (
               <div dangerouslySetInnerHTML={{ __html: summary }} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </div>
            {ShowReadMore && <Link to={`/getpostbyid/${id}`} className="btn btn-primary">Read More</Link> }
          </article>
          <hr />
          {showCommentSection && <CommentSection/>}
    </>
    );
  };
  
  export default BlogPost;
