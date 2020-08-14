import React from "react";

function Contact() {
  return (
    <>
      <header>
        <h1 id="soon">Contact Info</h1>
      </header>
      <section class="container contactInfo">
        <ul class="col-12">
          <a
            href="https://www.linkedin.com/in/david-c-2835011a8/"
            class="linkedIn"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
          <a href="mailto: daviddcarmona@du.edu" class="email" target="_blank">
            daviddcarmona@du.edu
          </a>
          <br />
          <a
            href="/resume/resume.pdf"
            class="resume"
            download="resume-ddcarmona"
          >
            Resume
          </a>
        </ul>
      </section>
    </>
  );
}

export default Contact;
