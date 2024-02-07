import EditPost from "@/components/EditPost";

export default function EditPage({params}) {

    const postId = params.id

    return (
    
    <div>
        <main>
        <h2>Edit Post</h2>
        </main>
    <EditPost />
    </div>
    )
}

// this isn't functioning yet