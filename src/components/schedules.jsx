import React from "react";

export const Schedules = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className={/*"col-md-10 col-md-offset-1*/  "section-title"}>
          <h2>Schedules</h2>
        </div>
        <div className={"grid "}
          
        >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className={/*"col-xs-6 col-md-3"*/ "" }>
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <h3>{d.day}</h3>
                  <p>{d?.time}</p>
                  <h5>{d.title}</h5>
                  <h5>{d.title2}</h5>
                  <p>{d?.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
