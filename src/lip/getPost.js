export default async function getPost(id) {  
    const results = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return results.json();

}