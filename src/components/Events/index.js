import React, { useState, useEffect } from "react";
import axios from "axios";

import EventItem from "./EventItem";

// Query to the Meetup api for 5 event results.
// CORS-Anywhere used for an easy defeat of CORS issues
const MEETUP_API =
  "https://cors-anywhere.herokuapp.com/https://api.meetup.com/The-Junior-Dev-Struggle-Bus/events?&page=5";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const response = await axios(MEETUP_API);

      setEvents(response.data);
    };

    getEvents();
  }, []);

  return (
    <div className="container">
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Events;
