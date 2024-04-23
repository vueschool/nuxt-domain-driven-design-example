import { faker } from "@faker-js/faker";
import type { User } from "@/domains/users/types";
export default defineEventHandler(async (event): Promise<User[]> => {
  const users = [];
  const numOfUsers = 50;

  for (let index = 0; index < numOfUsers; index++) {
    users.push({
      username: faker.internet.userName(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }
  return users;
});
