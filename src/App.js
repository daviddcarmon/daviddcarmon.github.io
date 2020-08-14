import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Nav from "./src/components/Nav";

function App() {
  return (
    <Router>
      <Nav>
        <Route exact path="/" components={Home} />
        <Route exact path="projects" components={Projects} />
        <Route exact path="contact" components={Contact} />
      </Nav>
    </Router>
  );
}
