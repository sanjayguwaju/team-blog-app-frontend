import { useState, useEffect } from "react";

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    // Check if the user is at the bottom of the page
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100) {
      return;
    }
    setIsFetching(true);
  };

  useEffect(() => {
    // Debounce function to limit the rate of function execution
    const debounce = (func, delay) => {
      let inDebounce;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    window.addEventListener("touchmove", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("touchmove", debouncedHandleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("Fetch more....");
    });
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
