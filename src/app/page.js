import AddPost from "@/components/AddPost";
import { sql } from "@vercel/postgres";

export default async function Home() {

  const posts = await sql`SELECT * FROM postz`

  return (
  <div>
    <main>
     <div><h2>post</h2>
        <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>
            {post.text}
          </li>
        ))}
      </ul>
      </div>

      <div><h2>created at</h2>
        <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>
            {post.created_at.toLocaleString()}
          </li>
        ))}
      </ul>
      </div>

      <div><h2>updated at</h2>
        <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>
            {post.updated_at.toLocaleString()}
          </li>
        ))}
      </ul>
      </div>
    </main>
    <AddPost />
  </div>
  );
}
