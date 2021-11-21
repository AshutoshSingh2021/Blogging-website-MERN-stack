import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const user = false;

  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcons fab fa-instagram"></i>
        <i className="navIcons fab fa-facebook"></i>
        <i className="navIcons fab fa-twitter"></i>
        <i className="navIcons fab fa-youtube"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navCenterList">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navCenterList">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navCenterList">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navCenterList">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navCenterList">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img className="navImg" src="./images/I (4).png" alt="logo" />
        ) : (
          <ul className="navList">
            <li className="navCenterList">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navCenterList">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
