import React from "react";
import Cards from "../util/types/Cards";

type MyProps = {
  data: Cards;
};

function FormCard(props: MyProps) {
  return (
    <div className="card">
      <ul>
        <li data-testid="card-file">
          {props.data.file?.split("\\").slice(-1)}
        </li>
        <li>{props.data.color}</li>
        <li>{props.data.thisThat}</li>
        <li>{props.data.name}</li>
        <li>{props.data.date}</li>
      </ul>
    </div>
  );
}

export default FormCard;
