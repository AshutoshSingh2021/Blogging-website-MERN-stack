import "./navbar.css"

export default function Navbar() {
    return (
        <div className ="nav">
            <div className="navLeft">
            <i className="navIcons fab fa-instagram"></i>
            <i className="navIcons fab fa-facebook"></i>
            <i className="navIcons fab fa-twitter"></i>
            <i className="navIcons fab fa-youtube"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navCenterList">HOME</li>
                    <li className="navCenterList">ABOUT</li>
                    <li className="navCenterList">CONTACT</li>
                    <li className="navCenterList">WRITE</li>
                    <li className="navCenterList">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img className="navImg" src="./images/I (4).png" alt="logo" />
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
