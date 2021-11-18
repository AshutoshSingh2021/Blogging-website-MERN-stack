import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImg" src="images/pixelImg.jpg" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum
          mollitia, nulla nemo totam nobis?
        </p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
          <li className="sidebarListItems">Life Style</li>
          <li className="sidebarListItems">Science</li>
          <li className="sidebarListItems">Technology</li>
          <li className="sidebarListItems">Business</li>
          <li className="sidebarListItems">Growth</li>
          <li className="sidebarListItems">Analysis</li>
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
