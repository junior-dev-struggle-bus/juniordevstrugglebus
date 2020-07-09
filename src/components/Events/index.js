import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Events.module.css";

import EventItem from "./EventItem";
import HideBiweekly from "./HideBiweekly";

// Query to the Meetup api for 5 event results.
// CORS-Anywhere used for an easy defeat of CORS issues
const MEETUP_API =
  "https://cors-anywhere.herokuapp.com/https://api.meetup.com/The-Junior-Dev-Struggle-Bus/events?&page=5";

export default function () {
  const [events, setEvents] = useState([]);
  const [hideBiweekly, setHideBiweekly] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios(MEETUP_API);

      if (hideBiweekly) {
        const noBiweekly = data.filter(
          (event) =>
            event.name !== "The Struggle Deluxe - Coding Open Study Lab"
        );
        setEvents(noBiweekly);
      } else {
        setEvents(data);
      }
    };

    getEvents();
  }, [hideBiweekly]);

  return (
    <div className="container">
      <h1 className={`title5 ${styles.pageTitle}`}>Upcoming Events</h1>
      <HideBiweekly
        hideBiweekly={hideBiweekly}
        setHideBiweekly={setHideBiweekly}
      />
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
