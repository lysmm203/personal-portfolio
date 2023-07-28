

export default function Experiences(){
    return(
        <div className={"section"}>
            <div className={"section-heading"}>
                <h1>02. My Experiences</h1><hr className={"section-heading-line"}/>
            </div>
            <div className={"experience-table"}>
                <div className={"companies"}>
                    <button className={"company-name"}><p>Vertext Software</p></button>
                    <button className={"company-name"}><p>Goodyear</p></button>
                    <button className={"company-name"}><p>Line45</p></button>
                    <button className={"company-name"}><p>Anglophone Chile</p></button>
                </div>
                <div className={"job"}>
                    <h2>
                        <span>Software Engineer Intern </span>
                        <span className={"bold"}>@ Vertex Software</span>
                    </h2>
                    <p>July 2022 - August 2022</p>
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