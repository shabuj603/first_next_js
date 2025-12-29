import getPost from "@/lip/getPost";
import React from "react";
const PostDetailPage = async ({params}) => {
    const post = await getPost(params.id);
    const { title, body } = post;

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}   
export default PostDetailPage;