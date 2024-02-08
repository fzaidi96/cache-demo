import EditPost from "@/components/EditPost";
import AddPost from "@/components/AddPost";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home({searchParams}) {

  const posts = await sql`SELECT * FROM postz`

  return (
  <div>
    <h1>A static website displaying a list of posts and when they were made</h1>
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
    </main>

    <Link href={`/updated`}><button>click here</button></Link>
  </div>
  );
}
