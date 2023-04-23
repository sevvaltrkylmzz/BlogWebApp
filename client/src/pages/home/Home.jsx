import Posts from "../../components/blogposts/Posts"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
    return ( 
    <>
    <Header/>
        <div className="home">
           
            <Posts/>
            <Sidebar/>
        </div>
        </>
    );
}
