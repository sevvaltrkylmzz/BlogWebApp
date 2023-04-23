import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                
                <img className="singlePostImg" src="assets/barcelona.jpg" alt=""/>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit, amet co
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i class="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor" >Author: <b>Sevval</b> </span>
                    <span className="singlePostDate" > 1 hour ago </span>
                </div>
                <div className="singlePostDescription">
                    <p className="singlePostDesc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quo quas illo nam beatae amet repellat inventore sapiente iusto enim eos veritatis ex harum, tenetur accusantium in labore sunt consequatur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus repudiandae sed dignissimos rerum iusto blanditiis repellat, cumque voluptatum quam in consectetur ad possimus qui nostrum ea amet illo sapiente!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos ut illo eaque maxime voluptas doloribus aperiam deserunt tenetur deleniti ea maiores ipsa voluptates quia pariatur autem laboriosam, ipsum odio!
                    </p>
                </div>
            </div>
        </div>
    )
}
