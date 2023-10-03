import ScrollButton from "./scroll_button"

export default function Navbar(){
    return (
        <nav className={"navbar"}>
            <ul className={"navbar-buttons"}>
                <li><ScrollButton
                    sectionId={"about_me"}
                    sectionName={"01 About"}
                /></li>
                <li><ScrollButton
                    sectionId={"experiences"}
                    sectionName={"02 Experience"}
                /></li>
                <li><ScrollButton
                    sectionId={"projects"}
                    sectionName={"03 Projects"}
                /></li>
                <li><ScrollButton
                    sectionId={"contact_me"}
                    sectionName={"04 Contact"}
                /></li>
            </ul>

            <div>
                <a className={"button"} href={"https://www.google.com"}>Resume</a>
            </div>
        </nav>
    )

}