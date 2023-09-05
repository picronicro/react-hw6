import React from "react";
import {useState} from "react";
import Fox from "./components/fox";
import AddFox from "./components/addFox";

export default function FoxAPI() {
    const [foxPics, setFoxPics] = useState([])

    function addFox(link, title, desc) {
        setFoxPics(prevState => [{
            link: link,
            title: title,
            desc: desc
        }, ...prevState])
    }

    return(
        <div className="container">
            <AddFox addFox={addFox} />

            <h2 id="vault_title">fox pics vault</h2>
            <div className="vault">
                {foxPics.map(fox => <Fox link={fox.link} title={fox.title} desc={fox.desc} />)}
            </div>
        </div>
    )
}