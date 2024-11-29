import React from "react";

export const Speakers = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div style={{ marginBottom: 32}}>
          <h2>Speakers</h2>
          <p>
            Inspiring talks from renowned experts.
          </p>
        </div>
        <div className="grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} >
                  <div className="team-img-container">
                    <img src={d.avatar} alt={`${d.name}`} />
                  </div>
                  <div className="caption">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
};
