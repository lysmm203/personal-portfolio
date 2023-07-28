import React from "react"
import Button from "./button"

const companies = [
    {
        name: "Vertex Software",
        id: "vertex",
        clicked: false
    },
    {
        name: "Goodyear",
        id: "goodyear",
        clicked: false
    },
    {
        name: "Line45",
        id: "line45",
        clicked: false
    },
    {
        name: "Anglophone Chile",
        id: "anglophone",
        clicked: false
    }
]

// 1. Initialize a react state called companiesState, which uses the companies array to create the state
// 2. Create the array of buttons by mapping through the companiesState state, passing the name, id, clicked, and
// toggle function
// 3. The toggle function will use the setCompaniesState. The setCompaniesState will map over the previous state of the
// buttons. If the event.currentTarget.id == button.id, it will set the clicked to true. Otherwise, it will be false
// 4. Using the setCompaniesState means that the buttons will be re-rendered with the updated boolean values for clicked

export default function Experiences(){

    const [companiesState, setCompaniesState] = React.useState(companies)

    function highlightButton(id){
        setCompaniesState((prevState) => {
            return prevState.map((company) => {
                const abc =  {
                    ...company,
                    clicked: id === company.id
                }
                // console.log(abc)
                return abc
            })
        })
    }

    const companyButtons = companiesState.map(company => (
        <Button
            name={company.name}
            id={company.id}
            clicked={company.clicked}
            toggle={() => highlightButton(company.id)}
        />
    ))

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