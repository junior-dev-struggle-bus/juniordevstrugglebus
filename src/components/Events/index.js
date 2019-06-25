import React, { useState, useEffect } from "react";
import axios from "axios";

import Event from "./Event";

// Query to the Meetup api for 5 event results.
// CORS-Anywhere used for an easy defeat of CORS issues
const MEETUP_API =
  "https://cors-anywhere.herokuapp.com/https://api.meetup.com/The-Junior-Dev-Struggle-Bus/events?&page=5";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      url: MEETUP_API,
      method: "get"
    })
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div />;
}

export default Events;
