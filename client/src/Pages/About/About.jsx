import React from 'react'
import classes from "./about.module.css";


function About() {
  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <p className={classes.label}>About</p>

        <h1 className={classes.title}>Evangadi Networks</h1>

        <p className={classes.text}>
          No matter what stage of life you are in, whether you’re just starting
          elementary school or being promoted to CEO of a Fortune 500 company,
          you have much to offer to those who are trying to follow in your
          footsteps.
        </p>

        <p className={classes.text}>
          Whether you are willing to share your knowledge or you are just
          looking to meet mentors of your own, please start by joining the
          network here.
        </p>

        <button className={classes.button}>HOW IT WORKS</button>
      </div>
    </section>
  );
};
export default About
