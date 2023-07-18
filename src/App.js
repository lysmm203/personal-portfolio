import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Intro from "./components/intro"
import Body from "./components/body"
import Sidebar from "./components/sidebar"

function App() {
  return (
      <div>
        <Navbar/>
          <Body>
              <Sidebar/>
              <Intro/>
          </Body>

      </div>
  );
}

export default App;
