import { Link, useNavigate } from "react-router";


const Post = ({post}) => {
    console.log(post)
    const {title,id} = post;

    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/posts/${id}`)

    }

    return (
        <div style={{border:'2px solid red', borderRadius:'20px', marginBottom:'5px'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Show Details: {id}</button>
        </div>
    );
};

export default Post;