import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          {/* <li className="navCenterList">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li> */}
          {/* <li className="navCenterList">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li> */}
          <li className="navCenterList">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navCenterList" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/setting">
          <img className="navImg" src={PF+user.profilePic} alt="" />
          </Link>
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
