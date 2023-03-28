import React from "react";
import Cards from "../util/types/Cards";

type MyProps = {
  data: Cards;
};

class FormCard extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="card">
        <img className="card-image" src={this.props.data.file}></img>
        <div className="card-text">
          <h3>{this.props.data.name}</h3>
        </div>
      </div>
    );
  }
}

export default FormCard;
