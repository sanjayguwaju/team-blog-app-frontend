import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import BlogPost from "../components/BlogPost";
import { useGetBlogsQuery } from "../features/api/apiSlice";
import { useBlogPost } from '../redux/hooks/hooks';



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

  const { data: allBlogData, isLoading, isSuccess, isError, error } = useGetBlogsQuery();
  console.log("allBlogData ----> ", allBlogData)

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
      {allBlogData?.map((postdata) => (
        <BlogPost
          key={postdata._id}
          id={postdata._id}
          title={postdata.title}
          content={postdata.content}
          image={postdata.image}
          createdAt={postdata.createdAt}
          author={
            postdata?.author?.name
              ? postdata?.author?.name
              : "no author is avaliable"
          }
        />
      ))}
      <Pagination />
    </>
  );
};

export default Homepage;
