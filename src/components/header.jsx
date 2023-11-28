import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <header>
       Header will be here
       <nav>
        <ul>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/persons'>Persons</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
        </ul>
       </nav>
    </header>
    );
};

export default Header;