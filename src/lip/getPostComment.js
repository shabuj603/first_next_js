export default async function getPostComment(id) {  
    const results = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return results.json();

}