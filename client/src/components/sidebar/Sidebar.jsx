import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImg" src="images/canva.gif" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum
          mollitia, nulla nemo totam nobis?
        </p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarIcons">
          <i className="sidebarIcons fab fa-instagram"></i>
          <i className="sidebarIcons fab fa-facebook"></i>
          <i className="sidebarIcons fab fa-twitter"></i>
          <i className="sidebarIcons fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
