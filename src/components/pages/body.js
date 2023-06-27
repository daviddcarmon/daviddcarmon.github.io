import { Grid, Link } from "@mui/material";
import React from "react";
import Footer from "../footer";
import CustomIcon from "../icons/customIcon";

export default function Body() {
  return (
    <>
      <div className="container">
        <header>
          <h2 className="header">David Carmona</h2>
        </header>
        <Grid item xs={12} spacing={2}>
          <div className="container">
            <Grid item xs={3}>
              <p className="body section_1">
                I grew up in North Carolina, where a bit of NASCAR rubbed off on
                me. There was once a time I believed I was the next Evel
                Knievel. Anything with wheels on it; I was trying to see how far
                off the ground I could get, whether it be mounds of dirt, make
                shift ramps or the neighbor's driveway (that was the best
                one)... <br />
                <br />
                This passion for the extreme continued through many different
                activities, bringing me to work the in outdoor industry where my
                skill set in data analysis and eventually coding began. Now,
                through my industry and education I have a knowledge of fully
                responsive custom designed websites, while continuing to learn
                more languages to keep ahead of best design and layout. <br />
                <br />I currently work as a Sr Data Analysis at{" "}
                <CustomIcon height={13} width={13} />{' '}
                <Link
                  href="https://hoodieanalytics.com/"
                  target="_blank"
                  style={{ color: "#53b37e", textDecorationLine: "none" }}
                >
                  Hoodie Analytics
                </Link>
                , where I have a passion for large data analytics and consumers
                trends. Outside of work I have a 4 year old black and white
                Staffordshire Terrier mix named Lana and an awesome fiancé.
                Currently I am not accepting freelance work, but I'd love to get
                coffee and get to know you, so don't hesitate to get in touch.
              </p>
            </Grid>
          </div>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
