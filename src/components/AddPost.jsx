import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AddPost() {
    async function handleAddPost(formData) {
        "use server";
    
        const text = formData.get("text")
        const createdAt = new Date().toISOString(); // Current timestamp for created_at
        const updatedAt = createdAt;
        await sql`INSERT INTO postz(text, created_at, updated_at) VALUES (${text}, ${createdAt}, ${updatedAt})`
    
        revalidatePath(`/`);
        redirect(`/`);
        }
    
return (
        <div> 
            <form action={handleAddPost}>
            <textarea name="text" placeholder="Share new post here"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}