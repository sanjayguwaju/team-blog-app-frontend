import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDate, createSummary } from '../services/utility.services';
import CommentSection from "./CommentSection"
import { useBlogPost } from '../redux/hooks/hooks';
import { useSelector } from 'react-redux';


const BlogPost = () => {
  const blogData = useSelector(state => state.blogData);
  const { blogPostState } = useBlogPost();

  return (
    <>
      <h2 className="mb-3">Latest posts</h2>
      {blogData?.map((post) => {
        const formattedDate = formatDate(post.createdAt);
        const summary = createSummary(post.content);
        return (
          <article className="mb-3" key={post._id}>
            <header className="mb-2">
              <span className="badge bg-primary">Category</span>
              <h1><Link to={`/getpostbyid/${post._id}`}>{post.title}</Link></h1>
              <div><a href="#0">{post?.author?.name}</a></div>
              <div className="small">Posted on: {formattedDate}</div>
              {/* ... */}
              <figure className="figure">
                <img src={post.image} className="figure-img img-fluid" alt="Figure image" />
                {/* ... */}
              </figure>
              <div>
                {blogPostState.showTrimmedPost ? (
                  <div dangerouslySetInnerHTML={{ __html: summary }} />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                )}
              </div>
              {blogPostState.showReadMore && <Link to={`/getpostbyid/${post._id}`} className="btn btn-primary">Read More</Link>}
            </header>
          </article>
        );
      })}
      {blogPostState.showCommentSection && <CommentSection />}
    </>
  );
};

export default BlogPost;
