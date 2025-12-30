import getPost from "@/lip/getPost";
import getPostComment from "@/lip/getPostComment";
import { Geist, Roboto } from 'next/font/google'
import React from "react";
const geist = Geist({
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

  export async function generateMetadata({params}) {
    const { id } = await params; // ✅ FIX

  const post = await getPost(id); 
    return {
      title: post.title,
      description: post.body,
    }
  }
const PostDetailPage = async ({params}) => {
 const { id } = await params; // ✅ FIX
  const post = await getPost(id); 
  const comments = await getPostComment(id); 



    return (
        <div>
            <h1 className={`flex justify-center ${roboto.className}`}>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}   
export default PostDetailPage;