import { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import UserDetails2 from "../UserDetals2/UserDetails2";


const User = ({ user }) => {
    const { id, name, email, phone } = user;
    console.log("this is user data", user)

    const userStyle = {
        border: '2px solid green',
        padding: '10px',
        borderRadius: '20px',
        marginTop: '5px',
    }

    const [showInfo, setShowInfo] = useState(false)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())

    const [visitHome, setVisitHome] = useState(false)

    if(visitHome){
        return <Navigate to="/"></Navigate>
    }
     
    return (
        <div style={userStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>User Details</Link>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? "Hide" : "Show"} info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;