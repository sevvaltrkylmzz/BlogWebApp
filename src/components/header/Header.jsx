import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">We Aim For Higher! </span>
                <span className="headerTitleLg">My Internship Experience in DpointGroup</span>
            </div>
            <img className="headerImg" src='assets/headerimage.jpg' alt=""/>
        </div>
    )
}
