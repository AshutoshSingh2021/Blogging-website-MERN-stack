import "./header.css"


export default function Header() {
    return (
        <div className ="header">
           <div className="headerTitles">
               <span className="headerTitlesSm">React & Node</span>
               <span className="headerTitlesLg">Blogs</span>
           </div>
            <img src="./images/pexels-thisisengineering-3862132.jpg" alt="" className="headerImg" />
        </div>
    )
}
