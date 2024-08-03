import React from "react";
import utilStyles from "../styles/utils.module.css";
import styles from "./about.module.css";

const About = () => {
    const name = "@deveduar blog";


  return (
    <section className={styles.container}>
    {/* <h1 className={utilStyles.heading2Xl}>{name}</h1>  */}
    <h1 className={utilStyles.heading2Xl}>About</h1> 
    <p>
      Welcome to my personal blog! 👋 Here, I'll be sharing my passion for
      technology, productivity, and web development. Join me as we explore
      my projects, technology insights, and tips for boosting productivity
      🚀.
    </p>
    <p>
      You can contact me on{" "}
      <a href="http://www.linkedin.com/in/deveduar" target="_blank">
        Linkedin{" "}
      </a>
      or see my activity{" "}
      <a href="https://github.com/deveduar" target="_blank">
        Github
      </a>
      .
    </p>
  </section>
  );
};

export default About;
