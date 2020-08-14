import React from "react";

function Home() {
  return (
    <>
      <header>
        <h2 class="name">David Carmona</h2>
      </header>

      <div id="container">
        <div class="row">
          <p class="main-bio col">
            I grew up in North Carolina, where a bit of NASCAR rubbed off on me.
            There was once a time I believed I was the next Evel Knievel.
            Anything with wheels on it; I was trying to see how far off the
            ground I could get, whether it be mounds of dirt, make shift ramps
            or the neighbor's driveway (that was the best one)... <br />
            <br />
            This passion for the extreme continued through many different
            activities, bringing me to work the in outdoor industry where my
            skill set in data analysis and eventually coding began. Now, through
            my industry and education I have a knowledge of fully responsive
            custom designed websites, while continuing to learn more languages
            to keep ahead of best design and layout. <br />
            <br />I currently work as a Production Specialist at
            <a href="https://www.bdsa.com/" target="_blank">
              BDS Analytics
            </a>
            , where I have a passion for large data analytics and consumers
            trends. Outside of work I have a 3 year old black and white
            Staffordshire Terrier mix named Lana and an awesome girlfriend.
            Currently I am not accepting freelance work, but I'd love to get
            coffee and get to know you, so don’t hesitate to get in touch.
          </p>
        </div>
      </div>
      <div class="row">
        <section class="contact-info">
          <img class="bio-image" src="images/profile.jpg" alt="profile-photo" />
        </section>
      </div>
    </>
  );
}

export default Home;
