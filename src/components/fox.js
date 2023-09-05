import React from "react";

export default function Fox(props) {
    return(
        <div className="fox">
            <img src={props.link} alt=""/>
            <h2 className="title">{props.title}</h2>
            <p className="desc">{props.desc}</p>
        </div>
    )
}