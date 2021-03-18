import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to='/'>BCD</NavLink>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
    </div>
  );
};

export default Header;
