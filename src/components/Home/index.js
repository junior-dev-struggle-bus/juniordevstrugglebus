import React, { Component } from "react";

//  Images
import homeImage from "../../img/juniorDevHome.jpg";
import aboutImage from "../../img/aboutSection.jpg";
import meetupLogo from "../../img/meetupLogo.svg";
import slackLogo from "../../img/slackLogo.png";

//  Buttons
import GitHubButton from "react-github-btn";

//  Styles
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="imageblock bg--dark">
          <div className="imgTile imageblock__content col-md-6 col-sm-4 pos-left">
            <img alt="Coders sitting around a table" src={homeImage} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-push-7 col-sm-8 col-sm-push-4">
                <div style={{ paddingBottom: "3em" }}>
                  <h2>Junior Dev Struggle Bus</h2>
                  <h4>Seattle Meetup Group and Development Community</h4>
                </div>
                <div className="meetupLink row">
                  <a
                    target="_blank"
                    // noopener used with _blank target to prevent security risks.
                    // Forces the new page to open in its own process and prevents access to your pages window.opener property
                    // noreferrer used for similar reasons.
                    rel="noopener noreferrer"
                    href="https://www.meetup.com/The-Junior-Dev-Struggle-Bus/"
                  >
                    <div className="col-sm-8">
                      <span>
                        <h4>Meetup with us!</h4>
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <img
                        alt="Meetup Logo"
                        style={{ maxWidth: "150px" }}
                        src={meetupLogo}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://juniordevstrugglebus.com/slack"
                  >
                    <div className="col-sm-8">
                      <span>
                        <h4>Join us on Slack!</h4>
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <img
                        alt="Slack Logo"
                        style={{ maxWidth: "150px", backgroundColor:'white', padding:'.5em', borderRadius:'1em' }}
                        src={slackLogo}
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/junior-dev-struggle-bus/juniordevstrugglebus"
                  >
                    <div className="col-sm-8">
                      <span>
                        <h4>Contribute!</h4>
                      </span>
                    </div>
                  </a>
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
            </div>
            {/* <!--end of row--> */}
          </div>
          {/* <!--end of container--> */}
        </section>
        <section className="imageblock about-1 bg--secondary">
          <div className="imgTile imageblock__content col-md-6 col-sm-4 pos-right">
            <img alt="Laptop with code on the screen" src={aboutImage} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-8 text-left">
                <h3>About the Community</h3>
                <p>
                  The Junior Dev Struggle Bus is a community of aspiring
                  programmers supporting each other in trying to land that
                  coveted first dev job. The road is long and the struggle is
                  hard when breaking into the tech industry. What we can't
                  accomplish alone, we can accomplish together. Come with your
                  woes and laptops, sip on some joe, get advice on planning your
                  job hunt, make new friends, hangout, pair program, show off
                  your projects, etc. We are laid back and friendly and were
                  here to foster an open minded and caring environment thats
                  focused on helping each other - so please, let's keep this
                  collaborative!
                </p>
                <a
                  className="btn btn--square"
                  href="https://www.meetup.com/The-Junior-Dev-Struggle-Bus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn__text">Join the Meetup</span>
                </a>
              </div>
            </div>
            {/* <!--end of row--> */}
          </div>
          {/* <!--end of container--> */}
        </section>
        <p />
      </React.Fragment>
    );
  }
}

export default Home;
