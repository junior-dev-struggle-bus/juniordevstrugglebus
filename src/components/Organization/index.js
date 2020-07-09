import React from "react";

import styles from "./About.module.css";

import orgImage from "../../img/orgPage.jpeg";

export default function (props) {
  return (
    <>
      <h1 className={`title5 ${styles.pageTitle}`}>About JDSB</h1>

      <h2 className={`title2 ${styles.subtitle}`}>Who we are</h2>
      <p className="paragraph">
        <img
          src="https://secure.meetupstatic.com/photos/event/4/f/a/0/highres_483860384.jpeg"
          alt="The JDSB members"
          className={styles.image}
        />
        The Junior Dev Struggle Bus is a tech community learning, building, and
        succeeding through helping one another. We provide an open and
        supportive community to eliminate barriers to opportunity and enhance
        the technical confidence of those interested in technology. Come with
        your woes and laptops, sip on some Joe, get advice on planning your job
        hunt, make new friends, learn and teach new tech, pair program, show off
        your projects, etc. We are laid back and friendly and were here to
        foster an open minded and caring environment that’s focused on helping
        each other. We value collaboration, encouragement, inclusivity and
        community, so come hang out!
      </p>

      <h2 className={`title2 ${styles.subtitle}`}>Vision</h2>
      <p className="paragraph">
        A tech community learning, building, and succeeding through helping one
        another.
      </p>

      <h2 className={`title2 ${styles.subtitle}`}>Mission</h2>
      <p className="paragraph">
        We provide an open and supportive community to eliminate barriers to
        opportunity and enhance the technical confidence of those interested in
        technology.
      </p>

      <h2 className={`title2 ${styles.subtitle}`}>Values</h2>
      <p className="paragraph">
        <strong>Collaboration:</strong> We are a community of builders making
        connections with each other over tech.
      </p>
      <p className="paragraph">
        <strong>Encouragement:</strong> Helping to dismantle fear and doubt
        through support, praise, or advice to develop self-trust.
      </p>
      <p className="paragraph">
        <strong>Inclusivity:</strong> Everyone should not only be welcomed, but
        actively encouraged to participate.
      </p>
      <p className="paragraph">
        <strong>Community:</strong> We focus on where we can provide value in
        the community and take action in those areas.
      </p>

      <h2 className={`title2 ${styles.subtitle}`}>Board of Directors</h2>
      <p className="paragraph">
        <strong>Chairman of the Board:</strong> Brett Hurst
      </p>
      <p className="paragraph">
        <strong>Member of the Board:</strong> Nate Spilman
      </p>
      <p className="paragraph">
        <strong>Member of the Board:</strong> Christina Roufosse
      </p>
      <p className="paragraph">
        <strong>Member of the Board:</strong> Lizzy Presland
      </p>
      <p className="paragraph">
        <strong>Member of the Board:</strong> Joseph Burchetta
      </p>

      <h2 className={`title2 ${styles.subtitle}`}>Executive Team</h2>
      <p className="paragraph">
        <strong>President:</strong> Brett Hurst
      </p>
      <p className="paragraph">
        <strong>Vice President:</strong> Nate Spilman
      </p>
      <p className="paragraph">
        <strong>Treasurer:</strong> Nate Spilman
      </p>
      <p className="paragraph">
        <strong>Secretary:</strong> Daniel Kluss
      </p>
    </>
  );
}
