import { useState } from "react";
import "./Navbar.scss";
import { userData } from "../../lib/DummyData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="#" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={userData.img} alt="" />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="#">Sign In</a>
            <a href="#" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
