import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="authorphoto" src="assets/sevvalphoto.png" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem provident alias fugiat fugit iusto quo, delectus autem aspernatur neque hic consectetur? </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Internship</li>
                    <li className="sidebarListItem">Barcelona</li>
                    <li className="sidebarListItem">Web Development</li>
                    <li className="sidebarListItem">Technology</li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-tiktok"></i>
       </div></div> </div>
    )
}
