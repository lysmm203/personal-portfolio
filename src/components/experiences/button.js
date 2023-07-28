import React from "react";



export default function Button(props){
    const styles = {
        backgroundColor: props.clicked ? "#D7D1C4" : "#EEEADE"
    }

    return (
        <button
            id={props.id}
            onClick={props.toggle}
            style = {styles}
            className={"company-name"}
        >
            <p>{props.name}</p>
        </button>
    )

}