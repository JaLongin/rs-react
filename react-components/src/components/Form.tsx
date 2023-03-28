import React, { FormEvent } from "react";
import Cards from "../util/types/Cards";

type FormProps = {
  updateFormPage: (card: Cards) => void;
};

class Form extends React.Component<FormProps> {
  getColor() {
    switch (true) {
      case this.redRadioRef.current?.checked:
        return this.redRadioRef.current?.value;
      case this.blueRadioRef.current?.checked:
        return this.blueRadioRef.current?.value;
      case this.greenRadioRef.current?.checked:
        return this.greenRadioRef.current?.value;
      default:
        return null;
    }
  }
  getThisThat() {
    switch (true) {
      case this.thisCheckBox.current?.checked &&
        this.thatCheckBox.current?.checked:
        return `${this.thisCheckBox.current?.value}${this.thatCheckBox.current?.value}`;
      case this.thatCheckBox.current?.checked:
        return this.thisCheckBox.current?.value;
      case this.thisCheckBox.current?.checked:
        return this.thisCheckBox.current?.value;
    }
  }
  textRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();
  redRadioRef = React.createRef<HTMLInputElement>();
  blueRadioRef = React.createRef<HTMLInputElement>();
  greenRadioRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  thisCheckBox = React.createRef<HTMLInputElement>();
  thatCheckBox = React.createRef<HTMLInputElement>();
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    console.log(
      this.textRef.current?.value,
      this.dateRef.current?.value,
      this.fileRef.current?.value,
      this.selectRef.current?.value,
      this.thisCheckBox.current?.checked,
      this.thatCheckBox.current?.checked
    );
    switch (true) {
      case this.redRadioRef.current?.checked:
        console.log(this.redRadioRef.current?.value);
        break;
      case this.blueRadioRef.current?.checked:
        console.log(this.blueRadioRef.current?.value);
        break;
      case this.greenRadioRef.current?.checked:
        console.log(this.greenRadioRef.current?.value);
        break;
    }
    const card: Cards = {
      file: this.fileRef.current?.value,
      name: this.textRef.current?.value,
      color: this.getColor(),
      thisThat: this.getThisThat(),
    };
    this.props.updateFormPage(card);
    (this.textRef.current as HTMLInputElement).value = "";
    (this.dateRef.current as HTMLInputElement).value = "";
    (this.fileRef.current as HTMLInputElement).value = "";
    (this.selectRef.current as HTMLSelectElement).value = "Yeah";
    (this.redRadioRef.current as HTMLInputElement).checked = false;
    (this.greenRadioRef.current as HTMLInputElement).checked = false;
    (this.blueRadioRef.current as HTMLInputElement).checked = false;
    (this.thisCheckBox.current as HTMLInputElement).checked = false;
    (this.thatCheckBox.current as HTMLInputElement).checked = false;
  };
  constructor(props: FormProps) {
    super(props);
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input ref={this.textRef} type={"text"}></input>
          <input ref={this.dateRef} type={"date"}></input>
          <input ref={this.fileRef} type={"file"} accept=".jpg"></input>
          <input
            type={"radio"}
            name="color"
            value={"red"}
            id="red"
            ref={this.redRadioRef}
          ></input>
          <label htmlFor="red">Red</label>
          <input
            type={"radio"}
            name="color"
            value={"blue"}
            id="blue"
            ref={this.blueRadioRef}
          ></input>
          <label htmlFor="blue">Blue</label>
          <input
            type={"radio"}
            name="color"
            value={"green"}
            id="green"
            ref={this.greenRadioRef}
          ></input>
          <label htmlFor="green">Green</label>
          <select ref={this.selectRef}>
            <option value={"true"}>Yeah</option>
            <option value={"false"}>No</option>
          </select>
          <input
            ref={this.thisCheckBox}
            type={"checkbox"}
            name="this-that"
            value="this"
            id="this-checkbox"
          ></input>
          <label htmlFor="this-checkbox">This</label>
          <input
            ref={this.thatCheckBox}
            type={"checkbox"}
            name="this-that"
            value="that"
            id="that-checkbox"
          ></input>
          <label htmlFor="this-checkbox">That</label>
          <button type="submit" onSubmit={this.handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    );
  }
}
export { Form };
