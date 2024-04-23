import { faker } from "@faker-js/faker";
import type { Post } from "@/domains/posts/types";
export default defineEventHandler(async (event): Promise<Post[]> => {
  const posts = [];
  const numOfUsers = 50;

  for (let index = 0; index < numOfUsers; index++) {
    posts.push({
      id: faker.string.uuid(),
      title: `Post ${index + 1}`,
      snippet: faker.lorem.paragraph(),
      content: faker.lorem.paragraphs(),
    });
  }
  return posts;
});
