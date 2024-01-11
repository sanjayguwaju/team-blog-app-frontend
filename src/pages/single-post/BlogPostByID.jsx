import { useParams } from "react-router-dom";
import BlogPost from "../../components/modules/blogpost/BlogPost";
import { useGetBlogPostByIdQuery } from "../../features/api/apiSlice";

const BlogPostByID = () => {
  const { id } = useParams();
  const { data: postById, isLoading } = useGetBlogPostByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BlogPost
        singlePost={postById}
      />
    </>
  );
};

export default BlogPostByID;