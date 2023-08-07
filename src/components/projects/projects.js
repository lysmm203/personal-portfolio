import React from "react"

const projects = [
    {
        name: "Stock Price Predictor",
        techonologies: "Python, Pandas, Keras, Matplotlib",
        desc: "A stock prioce predictor using an LSTM to predict the historical closing stock price of the S&P500, " +
            "NASDAQ, and DJIA indices"

    },{
        name: "Riddet",
        techonologies: "Python, Flask, MySQL, Git, Pytest",
        desc: "A Reddit clone with basic CRUD functionalities"

    },{
        name: "Stock Market Simulator",
        techonologies: "Python, Django, SQLite, Beautifulsoup, requests",
        desc: "A stock market simulator that allows users to simulate and invest in stock markets across different " +
            "time periods"

    },{
        name: "Artket",
        techonologies: "Python, Flask, SQLAlchemy",
        desc: "An online auction house that allows users to purchase fine-art items"

    }
]


export default function Projects(){
    return (
        <div className={"section"}>
            <div className={"section-heading"}>
                <h1>03. My Projects</h1><hr className={"section-heading-line"}/>
            </div>
        </div>
    )
}