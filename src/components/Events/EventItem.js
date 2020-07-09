import React from "react";
import styles from "./EventItem.module.css";

function Event(props) {
  const { name, link, local_date, venue } = props.event;

  return (
    <div className={styles.eventItem}>
      <h2 className="groupTitle">{name}</h2>
      <div className="groupItem">
        <h3 className={styles.eventTitle}>
          {venue ? venue.name : "TBD"} - {local_date}
        </h3>
        <a
          target="_blank"
          className="btn alt"
          rel="noopener noreferrer"
          href={link}
        >
          RSVP on Meetup
        </a>
      </div>
    </div>
  );
}

export default Event;
