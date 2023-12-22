import { useDispatch, useSelector } from 'react-redux';

export function useBlogPost() {
  // const storeState = useSelector(state => state);
  // console.log("storeState -->", storeState);
  const blogPostState = useSelector(state => state.blogPost)
  return { blogPostState };
}