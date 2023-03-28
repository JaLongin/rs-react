import React, { FormEvent } from "react";

type formProps = {
  num: number;
};

class Form extends React.Component {
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
  };
  constructor(props: formProps) {
    super(props);
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input ref={this.textRef} type={"text"}></input>
          <input ref={this.dateRef} type={"date"}></input>
          <input ref={this.fileRef} type={"file"}></input>
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
          <button type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}
export { Form };
