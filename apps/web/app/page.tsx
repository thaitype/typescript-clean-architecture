// import { prisma } from "@thaitype-com/database";
import { fetchPosts } from "../data";

export default async function IndexPage() {
  // const users = await prisma.user.findMany();
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Hello World</h1>
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
