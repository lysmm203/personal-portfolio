import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'

function LeftSidebar(){
    return (
        <div className={"sidebar"}>
            <ul>
                <li><a href={"https://github.com/lysmm203"}><img src={github}/></a></li>
                <li><a href={"https://www.linkedin.com/in/yong-seok-lee-303185154/"}><img src={linkedin}/></a></li>
            </ul>
        </div>
    )
}


function RightSidebar(){
    return (
        <div className={"sidebar"}>
            <ul>
                <li>Right sidebar</li>
                <li>Right sidebar</li>
                <li>Right sidebar</li>

            </ul>
        </div>
    )
}

export {LeftSidebar, RightSidebar}