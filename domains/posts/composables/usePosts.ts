import type { Post } from "@/domains/posts/types";
export const usePosts = () => {
  const posts = useState("posts", (): Post[] => []);

  async function fetch() {
    const { data, error } = await useFetch("/api/posts");
    if (error.value) throw error;
    if (!data.value) throw new Error("No data");
    posts.value = data.value;
  }
  return {
    fetch,
    posts,
  };
};
