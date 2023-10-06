import React from "react";

export default function ContactMe(){
    return (
        <div className={"section"} id={"contact_me"}>
            <div className={"section-heading"}>
                <h1>04. Get in Touch!</h1><hr className={"section-heading-line"}/>
            </div>
            <div className={"center"}>
                <p>I'm always open to meeting new people and exploring new opportunities. Whether you want to talk to me
                about a cool idea or just want to say hi, my inbox is always open!</p>
            </div>

            <div className={"center"}>
                <a className={"button"} href={"mailto:lyeongsuk97@gmail.com"} target="_blank" rel="noopener noreferrer">
                    Contact me!</a>
            </div>


        </div>
    )
}