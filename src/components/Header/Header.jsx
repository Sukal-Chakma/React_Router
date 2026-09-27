import {  NavLink } from "react-router";

import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/Laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                {/* <Link to="/">Home</Link> */}
            </nav>
        </div>
    );
};

export default Header;