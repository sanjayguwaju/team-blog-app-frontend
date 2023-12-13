import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDate, createSummary } from "../services/utility.services";
import CommentSection from "./CommentSection";
import { useBlogPost } from "../redux/hooks/hooks";
import { useSelector } from "react-redux";

const BlogPost = ({ singlePost }) => {
  const blogData = useSelector((state) => state.blogData);
  const { blogPostState } = useBlogPost();

  const posts = singlePost ? [singlePost] : blogData;

  return (
    <>
      <h2 className="mb-3">{singlePost ? 'Post' : 'Latest posts'}</h2>
      {posts?.map((post) => {
        const formattedDate = formatDate(post.createdAt);
        const summary = createSummary(post.content);
        return (
          <article className="mb-3" key={post._id}>
            <header className="mb-2">
              <span className="badge bg-primary">Category</span>
              <h1>
                <Link to={`/getpostbyid/${post._id}`}>{post.title}</Link>
              </h1>
              <div>
                <a href="#0">{post?.author?.name}</a>
              </div>
              <div className="small">Posted on: {formattedDate}</div>
              <div className="small">
                <span className="badge bg-primary">
                  <FontAwesomeIcon icon={faThumbsUp} /> 13{" "}
                  <span className="visually-hidden">likes</span>
                </span>
                <span className="badge bg-primary">
                  <FontAwesomeIcon icon={faComments} /> 3{" "}
                  <span className="visually-hidden">comments</span>
                </span>
              </div>
              <div className="small">
                <a href="#0" className="badge bg-secondary">
                  #tag
                </a>
                <a href="#0" className="badge bg-secondary">
                  #longtag
                </a>
                <a href="#0" className="badge bg-secondary">
                  #tag
                </a>
                <a href="#0" className="badge bg-secondary">
                  #longertag
                </a>
                <a href="#0" className="badge bg-secondary">
                  #tag
                </a>
                <a href="#0" className="badge bg-secondary">
                  #verylongtag
                </a>
              </div>
              <figure className="figure">
                <img
                  src={post.image}
                  className="figure-img img-fluid"
                  alt="Figure image"
                />
                <figcaption className="figure-caption small">
                  <p className="mb-0">
                    <i className="fa fa-camera" aria-hidden="true"></i>
                    <span className="sr-only">Photo by:</span> Artist Name
                  </p>
                </figcaption>
              </figure>
              <div>
              {singlePost ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : blogPostState.showTrimmedPost ? (
                <div dangerouslySetInnerHTML={{ __html: summary }} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
              </div>
              {!singlePost && blogPostState.showReadMore && (
              <Link
                to={`/getpostbyid/${post._id}`}
                className="btn btn-primary"
              >
                Read More
              </Link>
            )}
            </header>
          </article>
        );
      })}
      {(singlePost || blogPostState.showCommentSection) && <CommentSection />}
    </>
  );
};

export default BlogPost;
