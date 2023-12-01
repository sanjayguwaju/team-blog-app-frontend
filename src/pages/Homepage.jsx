import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import BlogPost from "../components/BlogPost";
import { useGetBlogsQuery } from "../features/api/apiSlice";

const Homepage = () => {
    const [posts, setPost] = useState([]);
    const [showTrimmedPost, setshowTrimmedPost] = useState(true);
    const [ShowReadMore, setShowReadMore] = useState(false);
    const [showCommentSection, setShowCommentSection] = useState(false);
  useEffect(() => {
    if (posts) {
      setShowReadMore(true);
    }
    getAllBlogs(setPost);

    const id = setInterval(() => {
      getAllBlogs(setPost);
    }, 50000);

    return () => clearInterval(id);
  }, []);

  const { data, isLoading, isSuccess, isError, error } = useGetBlogsQuery();
  console.log("data ----> ", data)

  function getAllBlogs(setPost) {
    axios
      .get(`${process.env.SERVER_URL}/blogs/getallblog`)
      .then((response) => {
        setPost(response.data.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {posts.map((postdata) => (
        <BlogPost
          key={postdata._id}
          id={postdata._id}
          title={postdata.title}
          content={postdata.content}
          image={postdata.image}
          createdAt={postdata.createdAt}
          ShowReadMore={ShowReadMore}
          author={
            postdata?.author?.name
              ? postdata?.author?.name
              : "no author is avaliable"
          }
          showTrimmedPost={showTrimmedPost}
          showCommentSection={showCommentSection}
        />
      ))}
      <Pagination />
    </>
  );
};

export default Homepage;
