import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPost () {

    async function handleEditPost(formData) {
        "use server";
        const text = formData.get("text")
        const updatedAt = new Date().toISOString(); 
        
        await sql`UPDATE postz SET text = ${text}, updated_at = ${updatedAt}`;

        revalidatePath("/");
        redirect("/");
      }

    return (
         <div>
            <form action={handleEditPost}>

                <label for="text">edit post</label>
                <textarea name="text"></textarea>

                <button type="submit">Save Changes</button>
            </form>
        </div>
            
    )}

