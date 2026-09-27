import { useLoaderData, useNavigate } from "react-router";


const PostDetails = () => {
    const post = useLoaderData()
    // console.log(postDetails)
    const navigate = useNavigate()
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;