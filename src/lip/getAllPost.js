import next from "next";

export default async function getAllPost() {  
    const results = await fetch('https://jsonplaceholder.typicode.com/posts',
    // {cache: 'no-store'} ,
    {
        next: { revalidate: 10 }
    }
   
    );
    
    if (!results.ok) {
        throw new Error('Failed to fetch posts');
    }
    return results.json();

}