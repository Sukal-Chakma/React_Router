import { useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    const {name, website} = user;
    return (
        <div>
            <h1>here is user details</h1>
            <h4>name: {name}</h4>
            <h4>Website: {website}</h4>
         
        </div>
    );
};

export default UserDetails;