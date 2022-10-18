import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
           
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-tiktok"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About Company</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>

            </div>
            <div className="topRight"> 
            <img src="" alt=""/>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}

