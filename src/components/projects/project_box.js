import React from "react"

export default function ProjectBox(props){
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className={"project-box"}>
                <h2>{props.name}</h2>
                <p className={"tech-stack"}>{props.technologies}</p>
                <p>{props.desc}</p>
            </div>
        </a>
    )
}