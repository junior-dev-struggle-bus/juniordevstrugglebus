import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/normalize.css";
import "./css/global.css";

// **** Version 1 Styles ****
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./css/theme.css";

import Container from "./components/Container/Container";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Resources from "./components/Resources";
import Events from "./components/Events";
import Organization from "./components/Organization";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resources" component={Resources} />
            <Route path="/events" exact component={Events} />
            <Route path="/organization" exact component={Organization} />
            <Route
              path="/slack"
              render={() => {
                window.location.href =
                  "https://join.slack.com/t/jdsb/shared_invite/enQtNzA0NTY3OTE2ODg3LTE5ZTE5ODI5YmE5YTUzN2UyOWUxZmM1ZDZlNDliZTgxYTg0ODRlMmM3OThkY2JlZDRlNjIzYmJiMjNjNDBjOWQ";
                return null;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}
