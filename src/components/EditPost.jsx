import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPost ({postId}) {

    async function handleEditPost(formData) {
        "use server";
        const text = formData.get("text")
        const updatedAt = new Date().toISOString(); 
        
        await sql`UPDATE postz SET text = ${text}, updated_at = ${updatedAt} WHERE id =${postId}` 

        revalidatePath("/updated");
        redirect("/");
      }

    return (
         <div>
            <form action={handleEditPost}>
                <textarea name="text" placeholder="edit text here"></textarea>
                <button type="submit">Save Changes</button>
            </form>
        </div>
            
    )}