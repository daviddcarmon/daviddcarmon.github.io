import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Box,
  Link,
  Grid,
  Paper,
  Toolbar,
  AppBar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import useWindowDimensions from "./functions";
import { padding } from "@mui/system";
import Project from "../components/pages/projects";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NavBar() {

  return (
    <AppBar position="static" style={{background: 'none',color:'#ecdfce'}}>
      <Container maxWidth="xl">
        <Toolbar >
          <Grid container spacing={1}  justifyContent='center'>
            <Grid item xs={0} >
              <Link
                variant="contained"
                color="inherit"
                underline="none"
                href="https://www.github.com/daviddcarmon"
                target='_blank'
              >
                <GitHubIcon style={{fontSize: 18}} />
              </Link>
            </Grid>
            <Grid item xs={0} >
              <Link
                variant="contained"
                color="inherit"
                underline="none"
                href="/"
              >
                HOME
              </Link>
            </Grid>
            <Grid item xs={0} >
              <Link
                variant="contained"
                color="inherit"
                underline="none"
                href="/projects"
              >
                PROJECTS
              </Link>
            </Grid>
            <Grid item xs={0} >
              <Link
                variant="contained"
                color="inherit"
                underline="none"
                href="/contact"
              >
                CONTACT
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
