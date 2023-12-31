import React from "react"
import ProjectBox from "./project_box"

const projects = [
    {
        name: "Stock Price Predictor",
        techonologies: "Python, Pandas, Keras, Matplotlib",
        desc: "A stock price predictor using an LSTM to predict the historical closing stock price of the S&P500, " +
            "NASDAQ, and DJIA indices",
        link: "https://github.com/lysmm203/stock-price-predictor"

    },{
        name: "Riddet",
        techonologies: "Python, Flask, MySQL, Git, Pytest",
        desc: "A Reddit clone with basic CRUD functionalities",
        link: "https://github.com/lysmm203/Riddet"

    },{
        name: "Stock Market Simulator",
        techonologies: "Python, Django, SQLite, Beautifulsoup, requests",
        desc: "A stock market simulator that allows users to simulate and invest in stock markets across different " +
            "time periods",
        link: "https://github.com/lysmm203/Stock-Market-Simulator"

    },{
        name: "Artket",
        techonologies: "Python, Flask, SQLAlchemy",
        desc: "An online auction house that allows users to purchase fine-art items",
        link: "https://github.com/lysmm203/Artket"

    }
]


// Retain the design of the original projects section, but make it so that hovering over it leads to an animation where a shadow outline is drawn
// (similar to my stock market simulator dialogue boxes) and the box moves up slightly (the moving part I might need to rethink. I'll try
// implementing it though)

export default function Projects(){


    const [projectState, setProjectsState] = React.useState(projects)

    let projectBoxes = projectState.map(project => (
        <ProjectBox
            name={project.name}
            technologies={project.techonologies}
            desc={project.desc}
            link={project.link}
        />
    ))


    return (
        <div className={"section"} id={"projects"}>
            <div className={"section-heading"}>
                <h1>03. My Projects</h1><hr className={"section-heading-line"}/>
            </div>
            {projectBoxes}
        </div>
    )
}