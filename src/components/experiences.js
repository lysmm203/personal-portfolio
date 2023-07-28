import React from "react"
// 1. Initialize a react state called "highlightedButton". This is a string variable that will be initialized as None
// 2. When any of the buttons are pressed, it calls the state function and updates the "highlightedButton" to the id of
// the button that was pressed
// 3. Then, the button that was pressed will have its background color changed to the darker shade, while all the other
// buttons will have their background color set to the default beige color


export default function Experiences(){

    const [highlightedButton, setHighlightedButton] = React.useState("")

    const companies = [
        {
            name: "Vertex Software",
            id: "vertex",
        },{
            name: "Goodyear",
            id: "vertex"
        },{
            name: "Line45",
            id: "vertex"
        },{
            name: "Anglophone Chile",
            id: "vertex"
        },
    ]

    const companyButtons = companies.map(company =>
        (<button className={"company-name"} id={company.id}><p>{company.name}</p></button>));

    return(
        <div className={"section"}>
            <div className={"section-heading"}>
                <h1>02. My Experiences</h1><hr className={"section-heading-line"}/>
            </div>
            <div className={"experience-table"}>
                <div className={"companies"}>
                    {companyButtons}
                </div>
                <div className={"job"}>
                    <h2>
                        <span>Software Engineer Intern </span>
                        <span className={"bold"}>@ Vertex Software</span>
                    </h2>
                    <p className={"job-date"}>July 2022 - August 2022</p>
                    <ul className={"job-description"}>
                        <li>Built a software that scrapes and preprocesses web data to identify listing statuses of
                        products using BeautifulSoup</li>
                        <li>Implemented an email sender to notify users when new products are on sale based on
                            subscription status</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}