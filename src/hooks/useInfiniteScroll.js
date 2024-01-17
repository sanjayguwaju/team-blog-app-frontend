import { useState, useEffect } from "react";

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    } 
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("Fetch more....");
    });
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
