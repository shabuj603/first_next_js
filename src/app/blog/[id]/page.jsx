import { notFound } from "next/navigation";
import React, { use } from "react";  

const BlogDetail = ({params}) => {

  const { id } = use (params);
if (!id)  {
    
    notFound(); 
  }
    return (
        <div>  
            <h1>Blog Detail Page</h1>
            <p>Blog ID: {id}</p>
        </div>
    );
}
export default BlogDetail;