import "./post.css"

export default function Post() {
    return (
        <div className="post">
           <img className="postImg" 
           src="assets/barcelona.jpg" alt=""/>
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">#Barcelona</span>
                   <span className="postCat">#Internship</span>
               </div>
               <span className="postTitle">
                   Living Costs in Barcelona
               </span>
               <span className="postExp">
               In this blog post, I want to talk about the living costs in Barcelona. This article is aimed at students so it may differ for working adults.
               Barcelona is a wonderful city for students, to experience beautiful touristic attractions, food, beaches, nightlife, entertainment, and so on. The cost of living is quite low compared to other popular European cities.
                   <br/>
               </span> <span className="readMore">Read More</span>
               <hr/>
               <span className="postDate">09/10/2022</span>
           </div>
        </div>
    )
}
