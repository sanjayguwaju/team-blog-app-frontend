import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import BlogPost from "../components/BlogPost";
import ReactPaginate from "react-paginate";

const Homepage = () => {
    const [posts, setPost] = useState([]);
    const [showTrimmedPost, setshowTrimmedPost] = useState(true);
    const [ShowReadMore, setShowReadMore] = useState(false);
    const [showCommentSection, setShowCommentSection] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const postPerPage = 2; 
    const pagesVisited = pageNumber * postPerPage;

    const displayPosts = posts.slice(pagesVisited, pagesVisited + postPerPage)
    .map((postdata) => (
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
    ));

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

  const pageCount = Math.ceil(posts.length / postPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {displayPosts}
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageActive={pageChange}
      containerClassName={"paginationBtn"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
        />
    </>
  );
};

export default Homepage;
