import React from "react";

export const Contact = (props) => {

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>
              You can contact us using the details below.
            </p>
          </div>
          <h3>Contact Info</h3>
          <div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Quantum Computing Club, OAU. 
            {/* Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
