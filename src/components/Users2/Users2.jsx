import { use } from "react";


const Users2 = ({userPromise}) => {
    const users = use(userPromise)
    console.log('users data load', users)
    return (
        <div>
            
        </div>
    );
};

export default Users2;