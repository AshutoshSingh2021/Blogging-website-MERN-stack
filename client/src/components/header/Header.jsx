import "./header.css"


export default function Header() {
    return (
        <div className ="header">
           <div className="headerTitles">
               <span className="headerTitlesSm">Iconic Media</span>
               <span className="headerTitlesLg">Blogs</span>
           </div>
            <img src="./images/loginBackgroundImg.jpg" alt="" className="headerImg" />
        </div>
    )
}
