import React from 'react'
import Link from "next/link";
const Blogs = () => {
  const blosgs = [
    { id: 1, title: 'First Blog', content: 'This is the first blog content' },
    { id: 2, title: 'Second Blog', content: 'This is the second blog content' },
  ]
  return (
    <div>
      <h1>Blogs Page</h1>
      <ul>
         {blosgs.map((blog) => (
        <div key={blog.id}>
           <li className='mb-5'><Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>          
        </div>
      ))}
       
      </ul>
     
    </div>
  )
}

export default Blogs