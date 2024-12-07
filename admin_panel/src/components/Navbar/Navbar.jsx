import { assets } from "../../assets/assets";
import profile_logo from '../../assets/profile_logo.svg';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <img src={profile_logo} alt="profile image" className="profile" />
    </div>
  );
};

export default Navbar;
