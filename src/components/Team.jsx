import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="">
          <h2>Meet the Team</h2>
          <p>
            Check out our team of instructors, mentors, and 
            volunteers who are dedicated to bringing this event to life.
          </p>
        </div>
        <div className="grid">
          {props.data
            ? props.data.map((d, i) => (
              <>
                <div key={`${d.name}--${i}`}>
                  <div className="team-img-container">
                    <img src={d.img} alt={`${d.name}`} />
                  </div>
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
                </>
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
};
