import { useEffect } from "react";
import Pagination from "../components/Pagination";
import BlogPost from "../components/BlogPost";
import { useGetBlogsQuery } from "../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setBlogData } from "../redux/slices/blogDataSlice/index";

const Homepage = () => {
  const dispatch = useDispatch();
  const {
    data: allBlogData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBlogsQuery();

  useEffect(() => {
    if (allBlogData) {
      dispatch(setBlogData(allBlogData));
    }
  }, [allBlogData]);

  return (
    <>
      <BlogPost />
      <Pagination />
    </>
  );
};

export default Homepage;
