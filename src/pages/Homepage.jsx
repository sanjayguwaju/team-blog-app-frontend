import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import BlogPost from "../components/BlogPost";

const Homepage = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAllBlogs(setPost);

    const id = setInterval(() => {
      getAllBlogs(setPost, setCurrentPage, setTotalPages);
    }, 50000);

    return () => clearInterval(id);
  }, []);

  function getAllBlogs(setPost, setCurrentPage, setTotalPages) {
    axios
      .get(`${process.env.SERVER_URL}/blogs/getallblog`)
      .then((response) => {
        debugger
        setPost(response.data);
        setTotalPages(Math.ceil(response.data.length / 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <>
      {currentPosts.map((postdata) => (
        <BlogPost
          key={postdata._id}
          id={postdata._id}
          title={postdata.title}
          content={postdata.content}
          image={postdata.image}
          author={postdata?.author?.name ? postdata?.author?.name : "no author is avaliable"}
        />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default Homepage;
