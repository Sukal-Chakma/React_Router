import { useLoaderData } from "react-router";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
   
    return (
        <div>
            <h1>Posts length is here: {posts.length}</h1>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;