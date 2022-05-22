// import { Container } from "@mui/system";
import { Container, Grid } from "@mui/material";
import React from "react";

function Projects() {
  return (
    <Container >
        <section className="container projects">
          <section className="row">
            <section className="col-sm-12 col-md-4">
              <h3>Weather Dashboard</h3>
              <a href="https://daviddcarmon.github.io/WeatherApp/">
                Application
              </a>
              <h4>Provide a five day forecast</h4>
              <p>
                User Story:
                <br />
                As a peron who enjoys the outdoors. I want to be up to date with
                the weather for the week. So I can take advantage of the best
                days to be outside.
                <br />
                <a
                  href="https://github.com/daviddcarmon/WeatherApp"
                  target="_blank"
                >
                  Source
                </a>
              </p>
            </section>
            <section className="col-sm-12 col-md-4">
              <h3>Day Planner</h3>
              <a
                href="https://daviddcarmon.github.io/Day-Planner/"
                target="_blank"
              >
                Application
              </a>
              <h4>Provide a way to track task</h4>
              <p>
                User Story: <br />
                As tasks increase in my day. I would like to keep track of the
                task and time. So that I do not miss a task and I can also add
                incoming tasks. <br />
                <a
                  href="https://github.com/daviddcarmon/Day-Planner"
                  target="_blank"
                >
                  Source
                </a>
              </p>
            </section>

            <section className="col-sm-12 col-md-4">
              <h3>Formula One Quiz</h3>
              <a href="https://daviddcarmon.github.io/Quiz/" target="_blank">
                Application
              </a>
              <h4>Quiz the user on Formula knowledge</h4>
              <p>
                User Story:
                <br />
                As a fan of formula one. I want to test the knowledge of users.
                So that I can better understand the user base.
                <br />
                <a href="https://github.com/daviddcarmon/Quiz" target="_blank">
                  Source
                </a>
              </p>
            </section>
          </section>
          <section className="row">
            <section className="col-sm-12 col-md-4">
              <h3>Employee Registration CLI</h3>
              <h4>Provide a way to show employees.</h4>
              <p>
                User Story:
                <br />
                As a office manager. I would like a command prompt that
                identifies the employees manager and basic information for each
                employee under the manager. So that I can create a webpage for
                each team.
                <br />
                <a
                  href="https://github.com/daviddcarmon/Employee-Registeration"
                  target="_blank"
                >
                  Source
                </a>
              </p>
            </section>
            <section className="col-sm-12 col-md-4">
              <h3>Employee Database CLI</h3>
              <h4>Provide a way to track employees.</h4>
              <p>
                User Story:
                <br />
                Use Case: As a business owner. I want to a database that I can
                add, create, view, and delete employees. So that I can keep
                track of all my employees in one location.
                <br />
                <a
                  href="https://github.com/daviddcarmon/Employee-Tracker"
                  target="_blank"
                >
                  Source
                </a>
              </p>
            </section>
          </section>
        </section>
    </Container>
  );
}

export default Projects;
