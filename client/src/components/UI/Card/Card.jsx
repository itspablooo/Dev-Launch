import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

function Card(props) {
  return (
    <div className="card">
      <CardHeader title={props.title} />
      <CardBody description={props.description} />
    </div>
  );
}

export default Card;