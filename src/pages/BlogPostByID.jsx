import { useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BlogPost from "../components/BlogPost"

const BlogPostByID = () => {
  const [postbyId, setPostById] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.SERVER_URL}/blogs/getblogpostbyid/${id}`)
      .then(response => {
        setPostById(response.data);
      })
  }, [id]);

  return (
    <>
      <BlogPost title={postbyId.title} content={postbyId.content} image={postbyId.image} author={postbyId?.author?.name}/>
    </>
  )
}

export default BlogPostByID