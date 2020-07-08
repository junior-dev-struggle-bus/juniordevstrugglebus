import React from "react";
import GitHubButton from "react-github-btn";

import styles from "./Home.module.css";
import meetup from "../../img/meetup.png";
import slack from "../../img/slack.png";
import desk from "../../img/desk.png";

export default function () {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContent}>
        <h1 className="title5">
          Junior Dev <span className={styles.titleHighlight}>Struggle Bus</span>
        </h1>
        <h2 className="title1">
          Seattle Meetup Group and Development Community
        </h2>

        <a
          href="https://www.meetup.com/The-Junior-Dev-Struggle-Bus/"
          className={`btn primary ${styles.btn}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={meetup} alt="meetup logo" width="25" className="icon" />
          Meet with us
        </a>
        <a
          href="/slack"
          target="_blank"
          className={`btn alt ${styles.btn}`}
          rel="noopener noreferrer"
        >
          <img src={slack} alt="slack logo" width="25" className="icon" />
          Chat with us
        </a>
        <div className={styles.githubWrapper}>
          <span className={styles.workWithUs}>Work with us:</span>
          <GitHubButton
            href="https://github.com/junior-dev-struggle-bus/juniordevstrugglebus/fork"
            data-size="large"
            data-show-count="true"
            aria-label="Fork junior-dev-struggle-bus/juniordevstrugglebus on GitHub"
          >
            Fork
          </GitHubButton>
        </div>
      </div>
      <div className={styles.homeImageWrapper}>
        <img
          src={desk}
          alt="illustration of a desk"
          className={styles.homeImage}
        />
      </div>
    </div>
  );
}
