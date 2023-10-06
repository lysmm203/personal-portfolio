import { useState, useEffect } from "react";

export default function Intro(){

    // 1. Select the first word in the array
    // 2. Check if the letterCount is 0, greater than the length of the word, or neither
    //     - If the letterCount is 0:
    //             - extract the first word and set it as currentWord
    //             - push currentWord to consoleText
    //             - set the textToType to consoleText[0].substring(0, letterCount)
    //             - increment letterCount by x (x = 1)
    //
    //     -If the letterCount is greater than the length of the word:
    //             - set x to - 1
    //             - set the textToType to consoleText[0].substring(0, letterCount)

    //     -If it is neither:
    //             - increment letterCount by x
    //             - set the textToType to consoleText[0].substring(0, letterCount)

    // const [console]
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