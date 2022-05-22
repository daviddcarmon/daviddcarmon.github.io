import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Body from './components/pages/body'
import NavBar from "./components/navBar";

function App() {
  return (
    <div
      className="App"
      
    >
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/#/contact" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
