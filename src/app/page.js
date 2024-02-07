import EditPost from "@/components/EditPost";
import AddPost from "@/components/AddPost";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home({searchParams}) {

  const posts = await sql`SELECT * FROM postz`

  return (
  <div>
    <main>
     <div><h2>post</h2>
        <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>
          <Link href={`/${post.id}`}>{post.text}</Link>
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
    <EditPost />
  </div>
  );
}
