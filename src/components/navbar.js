

export default function Navbar(){
    return (
        <nav className={"navbar"}>
            <ul className={"navbar-buttons"}>
                <li>01 About</li>
                <li>02 Experience</li>
                <li>03 Projects</li>
                <li>04 Contact</li>
            </ul>

            <div>
                <a className={"button"} href={"https://www.google.com"}>Resume</a>
            </div>
        </nav>
    )

}