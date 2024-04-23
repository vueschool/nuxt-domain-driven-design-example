import type { User } from "@/domains/users/types";
export const useUsers = () => {
  const users = useState("users", (): User[] => []);

  async function fetch() {
    const { data, error } = await useFetch("/api/users");
    if (error.value) throw error;
    if (!data.value) throw new Error("No data");
    users.value = data.value;
  }
  return {
    fetch,
    users,
  };
};
