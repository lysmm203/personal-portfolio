import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Intro from "./components/intro"
import Body from "./components/body"
import AboutMe from "./components/about_me"
import {LeftSidebar, RightSidebar} from "./components/sidebar"

function App() {
  return (
      <div>
        <Navbar/>
          <div className={"content"}>
              <LeftSidebar/>
              <Body>
                  <Intro/>
                  <AboutMe/>
              </Body>
              <RightSidebar/>
          </div>

      </div>
  );
}

export default App;
