import React from "react";

export const Hero = (props) => {
  return (
    <>
    
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="https://gdg.community.dev/events/details/google-gdg-on-campus-obafemi-awolowo-university-ife-nigeria-presents-ibm-qiskit-fall-fest-gdg-oau-quantum-computing-chapter"
                    className="btn btn-custom btn-lg"
                  >
                    Register
                  </a>{" "}
                </div> 
              </div>
            </div>
          </div>
        </div> 
        {/* <div className="test">
          <h1 style={{ color: "black" }}>Hello World</h1>
        </div> */}
      </header>

      {/* <div id="hero"> */}
        {/* <h1>
          {props.data ? props.data.title : "Loading..."}
          <span></span>
        </h1>
        <p>{props.data ? props.data.paragraph : "Loading..."}</p>
        <a
          href="https://"
          className="b tn bt n-custom bt n-lg"
        >
          Register
        </a> */}
      {/* </div> */}
    </>
  );
};
