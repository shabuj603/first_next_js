export default async function getAllPost() {  
    const results = await fetch('https://jsonplaceholder.typicode.com/posts');
    return results.json();

}