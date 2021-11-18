import  './single.css'
import SinglePost from '../../singlePost/SinglePost';
import Sidebar from "../../sidebar/Sidebar";
export default function Single() {
    return (
        <div className="single">
            {/* posts */}
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
