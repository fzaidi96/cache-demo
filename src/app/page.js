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

    <Link href={`/updated`}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Link>
  </div>
  );
}
