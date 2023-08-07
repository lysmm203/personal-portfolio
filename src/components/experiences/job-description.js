import React from "react"


export default function JobDescription(props){
    return (
        <div className={"job"}>
            <h2>
                <span>{props.title}</span>
                <span className={"bold"}> @ {props.company}</span>
            </h2>
            <p className={"job-date"}>{props.date}</p>
            <ul className={"job-description"}>
                {props.description.map(x => <li>{x}</li>)}
            </ul>
        </div>
    )
}