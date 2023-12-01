import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slices/counter/index';

export function useCounter() {
  const dispatch = useDispatch();
  const viewState = useSelector(state => state);
  const count = useSelector(state => state.counter);
  console.log("count ------->", count);
  console.log("Store ------->", viewState);

  const incrementCount = () => dispatch(increment());
  const decrementCount = () => dispatch(decrement());

  return { count, incrementCount, decrementCount };
}

export function useBlogPost() {
  const blogPostState = useSelector(state => state.blogPost)
  return { blogPostState };
}