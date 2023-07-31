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

// export default function jobDescription(){
//     return (
//         <div className={"job"}>
//             <h2>
//                 <span>Software Engineer Intern </span>
//                 <span className={"bold"}>@ Vertex Software</span>
//             </h2>
//             <p className={"job-date"}>July 2022 - August 2022</p>
//             <ul className={"job-description"}>
//                 <li>Built a software that scrapes and preprocesses web data to identify listing statuses of
//                     products using BeautifulSoup</li>
//                 <li>Implemented an email sender to notify users when new products are on sale based on
//                     subscription status</li>
//             </ul>
//         </div>
//     )
// }