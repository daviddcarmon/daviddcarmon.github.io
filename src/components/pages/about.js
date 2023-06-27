import { Container } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
      <section className="container contactInfo">
        <ul className="col-12">
          <a
            href="https://www.linkedin.com/in/david-c-2835011a8/"
            className="linkedIn"
            target="_blank"
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <br />
          <a href="mailto: daviddcarmona@du.edu" className="email" target="_blank">
            daviddcarmona@du.edu
          </a>
          <br />
          <a
            href="/resume/resume.pdf"
            className="resume"
            download="resume-ddcarmona"
          >
            Resume
          </a>
        </ul>
      </section>
    </div>
  );
}

export default About;
