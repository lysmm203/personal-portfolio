import { useState, useEffect } from "react";

export default function Intro(){

    let consoleText = ["Coder", "XAI Enthusiast", "Problem Solver"]

    useEffect(() => {
        var textToType = document.getElementById("console-text")
        var x = 1
        var letterCount = 1


        setInterval(() => {
            if (letterCount == 0){
                x = 1
                let currentWord = consoleText.shift()
                consoleText.push(currentWord)
                textToType.innerHTML = currentWord.substring(0, letterCount)
                letterCount += x
            } else if (letterCount > consoleText[0].length){
                x = -1
                letterCount += x
                textToType.innerHTML = consoleText[0].substring(0, letterCount)
            } else{
                letterCount += x
                textToType.innerHTML = consoleText[0].substring(0, letterCount)
            }
        }, 120)

    }, [])


    return (
        <div className={"section intro"}>
            <p>
                Hi, my name is
            </p>
            <h1>Yong Seok (Tommy) Lee,</h1>
            <div className={"animated-text"}>
                <p id={"console-text"}></p>
            </div>


        </div>
    )
}