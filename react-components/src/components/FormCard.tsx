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
        <ul>
          <li>{this.props.data.file?.split("\\").slice(-1)}</li>
          <li>{this.props.data.color}</li>
          <li>{this.props.data.thisThat}</li>
          <li>{this.props.data.name}</li>
          <li>{this.props.data.date}</li>
        </ul>
      </div>
    );
  }
}

export default FormCard;
