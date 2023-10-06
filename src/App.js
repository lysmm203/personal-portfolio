import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Intro from "./components/intro"
import Body from "./components/body"
import AboutMe from "./components/about_me"
import Experiences from "./components/experiences/experiences"
import Projects from "./components/projects/projects"
import {LeftSidebar, RightSidebar} from "./components/sidebar"
import ContactMe from "./components/contact_me"

function App() {
  return (
      <div>
        <Navbar/>
          <div className={"content"}>
              <LeftSidebar/>
              <Body>
                  <Intro/>
                  <AboutMe/>
                  <Experiences/>
                  <Projects/>
                  <ContactMe/>
              </Body>
              <RightSidebar/>
          </div>
      </div>
  );
}

export default App;
