export default function AboutMe(){
    return (
        <div>
            <div className={"section-heading"}>
                <h1>01. About Me</h1><hr className={"section-heading-line"}/>
            </div>
            <p>Hi! My name is Tommy and I enjoy creating things with code. I first started coding in the first
            year of college and I fell in love with it ever since.
            </p>
            <p>
            Despite my late beginnings, I have had the privilege of working in various areas of computer science,
            including <a href={"http://news-archive.anglophonechile.org/"}>NLP research</a>
            , <a href={"https://www.line-45.com/"}>software testing</a>
            , and <a href={"https://www.goodyear.com/"}>software development</a>.
            These experiences have helped me apply the concepts I've learned in class to solve real-world problems,
            and have served to deepen my interest in computer science.
            </p>

            <p>Some of the technologies I've been using are:</p>

            <ul className={"skill-table"}>
                <li className={"skill-item"}>Python</li>
                <li className={"skill-item"}>Django</li>
                <li className={"skill-item"}>Javascript</li>
                <li className={"skill-item"}>React</li>
            </ul>






        </div>
    )
}