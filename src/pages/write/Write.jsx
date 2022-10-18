import  "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="assets/writeHeader.jpg" alt=""/>
           <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" className="fileIn"/>
                    <input type="text" placeholder="Title" className="writeIn" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell us your story..." type="text" className="writeIn writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
           </form>
        </div>
    )
}
