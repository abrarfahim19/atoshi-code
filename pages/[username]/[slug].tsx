import Link from "next/link";

export default function SlugPost({}) {
    return (
        <main>
            <h2>This is Slug Post</h2>
            <Link style={{color:"red", marginTop:"100px"}} prefetch href={"/enter"}>Go to entry Page instead</Link>
        </main>
    )
}