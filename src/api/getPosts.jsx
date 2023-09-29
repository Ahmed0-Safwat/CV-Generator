import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const parsed = await ky(`https://jsonplaceholder.typicode.com/posts`).json();

  return parsed;
};

const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });
};

export { usePosts, fetchPosts };
