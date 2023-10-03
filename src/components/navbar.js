import ScrollButton from "./scroll_button"
import resume from '../assets/resume.pdf'

export default function Navbar(){
    return (
        <nav className={"navbar"}>
            <ul className={"navbar-buttons"}>
                <ScrollButton
                    sectionId={"about_me"}
                    sectionName={"01 About"}
                />
                <ScrollButton
                    sectionId={"experiences"}
                    sectionName={"02 Experience"}
                />
                <ScrollButton
                    sectionId={"projects"}
                    sectionName={"03 Projects"}
                />
                <ScrollButton
                    sectionId={"contact_me"}
                    sectionName={"04 Contact"}
                />
            </ul>

            <div>
                <a className={"button"} href={resume}>Resume</a>
            </div>
        </nav>
    )

}