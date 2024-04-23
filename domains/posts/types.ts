import type { User } from "@/domains/users/types";
export interface Post {
  id: string;
  title: string;
  snippet: string;
  content: string;
  author?: User;
}
