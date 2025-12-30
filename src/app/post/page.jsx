import getAllPost from "@/lip/getAllPost";
import Link from "next/link";
import React from "react";  
const PostPage = async () => {  
    const posts = await getAllPost();
    return (  
    <div>  
      <h1>Post Page</h1>  
      <p>This is the post page content.</p>  
      <ul>
        {posts.map((post) => (<li key={post.id} className="mb-4">
          <h2 className="text-xl font-bold"><Link href={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>{post.body}</p>
        </li>))}
      </ul>
    </div>  
  );  
}  
export default PostPage;