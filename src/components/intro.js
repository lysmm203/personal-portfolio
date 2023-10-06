import { useState, useEffect } from "react";

export default function Intro(){

    // const [console]
    let consoleText = ["Coder", "XAI Enthusiast", "Problem Solver"]

    useEffect(() => {
        var textToType = document.getElementById("console-text")



    }, [])


    return (
        <div className={"section"}>
            <p>
                Hi, my name is
            </p>
            <h1>Yong Seok (Tommy) Lee,</h1>
            <div id={"console-text"} >

            </div>
        </div>
    )
}