import { useDispatch, useSelector } from 'react-redux';

export function useBlogPost() {
  const blogPostState = useSelector(state => state.blogPost)
  return { blogPostState };
}