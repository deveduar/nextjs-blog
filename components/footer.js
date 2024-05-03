import React from "react";
import styles from "./footer.module.css"; // Importa los estilos del pie de página

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.developerInfo}>
          <p>Developed by </p>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            @deveduar
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/deveduar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../icons/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://twitter.com/deveduar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../icons/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="http://www.linkedin.com/in/deveduar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
