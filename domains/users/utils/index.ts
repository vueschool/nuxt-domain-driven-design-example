import type { User } from "@/domains/users/types";
export function getUserInitials(user: Pick<User, "name">) {
  return user.name
    .split(" ")
    .map((name) => name[0])
    .join("");
}
