import React from "react"
import Button from "./button"
import JobDescription from "./job-description"

const companies = [
    {
        name: "Vertex Software",
        id: "vertex",
        clicked: false,
        jobDesc: <JobDescription
            title={"Software Engineer Intern"}
            company={"Vertex Software"}
            date={"July 2022 - August 2022"}
            description={[
                "Built software that scrapes and preprocesses web data to identify listing statuses of products using Beautiful Soup",
                "Implemented an email sender to notify users when new products are on sale using the email and smtplib package"
            ]}
        />


    },
    {
        name: "Goodyear",
        id: "goodyear",
        clicked: false,
        jobDesc: <JobDescription
            title={"Software Engineer Intern"}
            company={"Goodyear"}
            date={"May 2022 - July 2022"}
            description={[
                "Implemented new functionalities to Goodyear’s in-house visualization software using PyVista. " +
                "Added data selection and interaction, contour plots, saving and loading visualizations, and copy and " +
                "paste functionality",
                "Built a GUI using PyQt5, adding a menu bar, dock widget, and information window",
                "Restructured the code to allow the software to run multiple sessions and improve readability"
            ]}
        />

    },
    {
        name: "Line45",
        id: "line45",
        clicked: false,
        jobDesc: <JobDescription
            title={"Software Test Engineer Intern"}
            company={"Line45"}
            date={"May 2021 - July 2021"}
            description={[
                "Built an automated testing suite using Pytest for Bensis, a SaaS application, achieving a code " +
                "coverage of 87%",
                "Built a mock database using PostgreSQL to write the tests for GraphQL queries and mutations"
            ]}
        />

    },
    {
        name: "Anglophone Chile",
        id: "anglophone",
        clicked: false,
        jobDesc: <JobDescription
            title={"Artificial Intelligence Research Assistant"}
            company={"Anglophone Chile"}
            date={"June 2020 - May 2021"}
            description={[
                "Preprocessed and lemmatized the JSON data of English newspapers published in Chile during the 19th " +
                "and early 20th centuries using the NLTK suite",
                "Determined whether the word “Chili” was used to refer to the country Chile or the fruit using the " +
                "spaCy NLP library"
            ]}
        />

    }
]

// 1. Create a component for the job description section
    // The components will be created based on the information in JS object "companies"
        // The information it will take are as follows:
            // Job title
            // Company name
            // Date
            // Bullet points

// 2. Conditionally render the job description component based on which object's clicked value is true

export default function Experiences(){

    const [companiesState, setCompaniesState] = React.useState(companies)

    function highlightButton(id){
        setCompaniesState((prevState) => {
            return prevState.map((company) => {
                return  {
                    ...company,
                    clicked: id === company.id
                }

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

    function displayDesc(companies){
        let i = 0;
        while (i < companies.length){
            if (companies[i].clicked){
                return companies[i].jobDesc
            }
            i++;
        }
        return companies[0].jobDesc
    }

    return(
        <div className={"section"}>
            <div className={"section-heading"}>
                <h1>02. My Experiences</h1><hr className={"section-heading-line"}/>
            </div>

            <div className={"experience-table"}>
                <div className={"companies"}>
                    {companyButtons}
                </div>
                {displayDesc(companiesState)}
            </div>
        </div>
    )
}