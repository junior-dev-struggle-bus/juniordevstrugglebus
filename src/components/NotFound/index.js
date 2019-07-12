import React from "react";

import duckImage from "../../img/duck.jpg";

const NotFound = () => (
  <div>
    <section className="imageblock about-1 bg--secondary">
      <div className="imageblock__content col-md-6 col-sm-4 pos-right">
        <div
          style={{
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <img alt="Professional Debugger" src={duckImage} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-8 text-left">
            <h1 style={{ paddingBottom: "1em" }}>Page Not Found</h1>
          </div>
        </div>
        {/* <!--end of row--> */}
      </div>
      {/* <!--end of container--> */}
    </section>
  </div>
);

export default NotFound;
