import React from "react";
import img from "../Images/profile.jpg";
import { styled } from "@mui/material/styles";
import { Container, Box, Grid, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={0}>
          <div className="row">
            <section className="contact-info">
              <img className="bio-image" src={`${img}`} alt="profile-photo" />
            </section>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
