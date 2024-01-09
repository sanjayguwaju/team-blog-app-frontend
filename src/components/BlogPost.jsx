import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { formatDate, createSummary } from "../services/utility.services";

import { useBlogPost } from "../redux/hooks/hooks";

import { useGetAllBlogPostsQuery } from "../features/api/apiSlice";

import CommentSection from "./CommentSection";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

const BlogPost = ({ singlePost }) => {
  const { blogPostState } = useBlogPost();
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]); 
  

  const fetchMoreBlogPosts = () => {
    // console.log("fetchMoreBlogPosts Called");
    setPage(prevPage => prevPage + 1);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreBlogPosts);

  // console.log("page -->", page);

  const { data: blogData, isLoading, isError, error } = useGetAllBlogPostsQuery({page, limit: 2});

  useEffect(() => {
    if (blogData) {
      // console.log("blogdata --->", blogData);
      setAllPosts(prevPosts => [...prevPosts, ...blogData]); // Update allPosts state
    }
    if (!isLoading) {
      setIsFetching(false);
    }
  }, [blogData, setIsFetching, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const posts = singlePost ? [singlePost] : allPosts;

  return (
    <>
      <h2 className="mb-3">{singlePost ? "Post" : "Latest posts"}</h2>
      {posts?.map((post) => {
        const formattedDate = formatDate(post.createdAt);
        const summary = createSummary(post.content);
        return (
          <article className="mb-3" key={post._id}>
            <header className="mb-2">
              <span className="badge bg-primary">Category</span>
              <h1>
                <Link to={`/getpostbyid/${post._id}`} style={{ textDecoration: 'none' }}>{post.title}</Link>
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
      {isFetching && <p>Loading more posts...</p>}
      {(singlePost || blogPostState.showCommentSection) && <CommentSection />}
    </>
  );
};

BlogPost.propTypes = {
  singlePost: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default BlogPost;
