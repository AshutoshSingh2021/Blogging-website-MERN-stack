import  './setting.css'
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img className="settingPPImg" src="./images/I (4).png" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Iconic Media" />
                    <label>Email</label>
                    <input type="text" placeholder="withiconicmedia@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
                <Sidebar/>
        </div>
    )
}