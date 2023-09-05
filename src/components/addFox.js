import React from "react";
import {useState} from "react";

export default function AddFox(props) {
    const [link, setLink] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    async function getFoxLink() {
        console.log("getting a fox")
        const response = await fetch("https://randomfox.ca/floof/")
        return response.json()
    }

    function handleSubmit(e) {
        console.log("saving the fox")
        props.addFox(link, title, desc)
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="fox_viewer">
                <p className="hint">click on the picture field to get a fox pic</p>
                <img id="img" src="" alt="" onClick={e => {
                    document.querySelector(".hint").innerHTML = "catching the fox"
                    getFoxLink().then(r => {
                        e.target.src = r.image
                        setLink(r.image)
                        document.querySelector(".hint").innerHTML = "got it!"
                    })
                }}/>
                <div className="input">
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="desc">desc</label>
                    <input type="text" name="desc" id="desc" onChange={e => setDesc(e.target.value)}/>
                </div>
                <button className="get_fox" type="submit">take this one</button>
            </div>
        </form>
    )
}