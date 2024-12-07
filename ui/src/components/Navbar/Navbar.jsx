/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuBorder, setMenuBorder] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    window.location.reload();
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />{" "}
      </Link>
      <ul className="navbar-menu">
        <Link
          onClick={() => setMenuBorder("home")}
          className={menuBorder === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/menus"
          onClick={() => setMenuBorder("menu")}
          className={menuBorder === "menu" ? "active" : ""}
        >
          Menus
        </Link>

        <Link
          to="/ngo-food-menus"
          onClick={() => setMenuBorder("ngo-food-menus")}
          className={menuBorder === "ngo-food-menus" ? "active" : ""}
        >
          NGO Food Menus
        </Link>
        {/* <a
          href="#footer"
          onClick={() => setMenuBorder("contact")}
          className={menuBorder === "contact" ? "active" : ""}
        >
          Contact Us
        </a> */}
        {/* <Link
          to="/excess-food-list"
          onClick={() => setMenuBorder("excessFoodList")}
          className={menuBorder === "excessFoodList" ? "active" : ""}
        >
          Excess Food List
        </Link> */}

        {/* <Link
          to="/ngo-register"
          onClick={() => setMenuBorder("ngo")}
          className={menuBorder === "ngo" ? "active" : ""}
        >
          NGO
        </Link> */}

        {!token && <Link onClick={() => setShowLogin(true)}>NGO</Link>}

        {/* {!token ? (
          <Link onClick={() => setShowLogin(true)}>NGO</Link>
        ) : (
          <div className="navbar_profile">
            <img src={assets.profile_icon} alt="profile_icon" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="bag_icon" />
                <p className="text-white">Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout_icon" />
                <p className="text-white">Logout</p>
              </li>
            </ul>
          </div>
        )} */}
      </ul>

      <HamburgerMenu></HamburgerMenu>

      <div className="navbar-right">
        <div className="navbar-basket-icon">
          <Link to="/cart">
            {" "}
            {/* <img src={assets.basket_icon} alt="basket icon" />{" "} */}
            <FaCartArrowDown size={28} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar_profile">
            <img src={assets.profile_icon} alt="profile_icon" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="bag_icon" />
                <p className="text-white">Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout_icon" />
                <p className="text-white">Logout</p>
              </li>
            </ul>
          </div>
        )}
        {/* <div style={{color: "white"}}>
          <Link to="/ngo-register"> NGO </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
