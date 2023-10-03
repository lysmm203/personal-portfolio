import React from "react";


// Secion names:
// 01 About, 02 Experience, 03 Projects, 04 Contact

// Section IDs:
// about_me, experiences, projects, contact_me




export default function ScrollButton(props){
    const handleScrollClick = () => {
        const scrollToComponent = document.getElementById(props.sectionId);
        if (scrollToComponent) {
            scrollToComponent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <li onClick={handleScrollClick}>{props.sectionName}</li>
    )
}