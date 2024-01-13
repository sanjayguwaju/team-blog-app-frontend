import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./blogpost.scss"
import "./BlogPost.css";

import { formatDate, createSummary } from "../../../services/utility.services";

import { useBlogPost } from "../../../redux/hooks/hooks";

import { useGetAllBlogPostsQuery } from "../../../features/api/apiSlice";

import CommentSection from "../../ui/comment/CommentSection";

import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

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
              <span className="category">Category</span>
              <h1 className="blogpost-title">
                <Link to={`/getpostbyid/${post._id}`}>{post.title}</Link>
              </h1>
              <div className="author-date--container">
                <a href="#0">{post?.author?.name}</a>
                <a  className="date">Posted on: {formattedDate}</a>
              </div>
              <div className="like-container my-element">
                <div className="small">
                  <a href="#0" className="tag">
                    #tag
                  </a>
                  <a href="#0" className="tag">
                    #longtag
                  </a>
                  <a href="#0" className="tag">
                    #tag
                  </a>
                  {/* <a href="#0" className="tag">
                    #longertag
                  </a>
                  <a href="#0" className="tag">
                    #tag
                  </a>
                  <a href="#0" className="tag">
                    #verylongtag
                  </a> */}
                </div>
                <div className="small">
                  <buttton className="like--button">
                    <FontAwesomeIcon icon={faThumbsUp} /> 13{" "}
                    <span className="visually-hidden">likes</span>
                  </buttton>
                  <buttton className="dislike--button">
                    <FontAwesomeIcon icon={faThumbsDown} /> 13{" "}
                    <span className="visually-hidden">likes</span>
                  </buttton>
                </div>
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
                    <span className="sr-only">Photo by:</span> Image Description : 
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
                  className="read-more-button"
                >
                  Read More
                </Link>
              )}
              <hr className="blogpost--separator"/>
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
