import { use } from "react";


const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise)
    const {name, username} = user;
    console.log("user", user)
    return (
        <div>
            <p><small>User name: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;