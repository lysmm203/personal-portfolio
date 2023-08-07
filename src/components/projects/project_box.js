import React from "react"

export default function ProjectBox(props){
    return (
        <div className={"project-box"}>
            <h2>{props.name}</h2>
            <h3>{props.technologies}</h3>
            <p>{props.desc}</p>
        </div>
    )
}