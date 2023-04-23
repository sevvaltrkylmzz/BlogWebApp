import "./settings.css"
import  Sidebar from "../../components/sidebar/Sidebar" 

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="assets/settings.jpg" alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" className="fileIn"/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Your Name" id=""/>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" id=""/>
                    <label>Password</label>
                    <input type="password"  id=""/>
                    <button className="settingsSubmit">Update</button>
                </form>

            </div>
                <Sidebar/>
            
        </div>
    )
}
