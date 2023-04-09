import React from "react";
function Card(props = { imgSrc: "", name: "", desc: "" }) {
  return (
    <div className="card">
      <img className="card-image" src={props.imgSrc}></img>
      <div className="card-text">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
