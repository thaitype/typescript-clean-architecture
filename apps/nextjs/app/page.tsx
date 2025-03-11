import { fetchUsers } from "../data";

export default async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>User List: </h1>
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
