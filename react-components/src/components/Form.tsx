import React, { FormEvent } from "react";
import Cards from "../util/types/Cards";

type FormProps = {
  updateFormPage: (card: Cards) => void;
};
type ErrorState = {
  dateError: string | null;
  radioError: string | null;
  fileError: string | null;
  checkBoxError: string | null;
  selectError: string | null;
  textError: string | null;
  fileInput: string | null;
  dateInput: string | null;
};

class Form extends React.Component<FormProps, ErrorState> {
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
    const errorState: ErrorState = {
      dateError: null,
      radioError: null,
      fileError: null,
      checkBoxError: null,
      selectError: null,
      textError: null,
      fileInput: this.state.fileInput,
      dateInput: this.state.dateInput,
    };
    if (
      this.textRef.current?.value &&
      this.dateRef.current?.value &&
      this.fileRef.current?.value &&
      this.selectRef.current?.value &&
      (this.thisCheckBox.current?.checked ||
        this.thatCheckBox.current?.checked) &&
      (this.redRadioRef.current?.checked ||
        this.blueRadioRef.current?.checked ||
        this.greenRadioRef.current?.checked)
    ) {
      const card: Cards = {
        file: this.fileRef.current?.value,
        name: this.textRef.current?.value,
        color: this.getColor(),
        thisThat: this.getThisThat(),
        date: this.dateRef.current?.value,
      };
      this.props.updateFormPage(card);
      this.setState(errorState);
      (this.textRef.current as HTMLInputElement).value = "";
      (this.dateRef.current as HTMLInputElement).value = "";
      (this.fileRef.current as HTMLInputElement).value = "";
      (this.selectRef.current as HTMLSelectElement).value = "true";
      (this.redRadioRef.current as HTMLInputElement).checked = false;
      (this.greenRadioRef.current as HTMLInputElement).checked = false;
      (this.blueRadioRef.current as HTMLInputElement).checked = false;
      (this.thisCheckBox.current as HTMLInputElement).checked = false;
      (this.thatCheckBox.current as HTMLInputElement).checked = false;
      alert("Your data was stored");
    } else {
      if (!this.textRef.current?.value) {
        errorState.textError = "Put some text here";
      }
      if (!this.dateRef.current?.value) {
        errorState.dateError = "Choose a date";
      }
      if (!this.fileRef.current?.value) {
        errorState.fileError = "Select a file";
      }
      if (!this.selectRef.current?.value) {
        errorState.selectError = "Allow to proceed";
      }
      if (
        !(
          this.thisCheckBox.current?.checked ||
          this.thatCheckBox.current?.checked
        )
      ) {
        errorState.checkBoxError = "Check something here";
      }
      if (
        !(
          this.redRadioRef.current?.checked ||
          this.blueRadioRef.current?.checked ||
          this.greenRadioRef.current?.checked
        )
      ) {
        errorState.radioError = "Select something here too";
      }
      this.setState(errorState);
    }
  };
  inputChange = () => {
    const errorState = {
      dateError: this.state.dateError,
      radioError: this.state.radioError,
      fileError: this.state.fileError,
      checkBoxError: this.state.checkBoxError,
      selectError: this.state.selectError,
      fileInput: this.fileRef.current?.value,
      dateInput: this.dateRef.current?.value,
    } as ErrorState;
    this.setState(errorState);
  };
  constructor(props: FormProps) {
    super(props);
    this.state = {
      dateError: null,
      radioError: null,
      fileError: null,
      checkBoxError: null,
      selectError: null,
      textError: null,
      fileInput: null,
      dateInput: null,
    };
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          {this.state.textError ? (
            <div className="error">{this.state.textError}</div>
          ) : (
            <div className="error"></div>
          )}
          <input ref={this.textRef} type={"text"}></input>
          {this.state.dateError ? (
            <div className="error">{this.state.dateError}</div>
          ) : (
            <div className="error"></div>
          )}
          <input
            ref={this.dateRef}
            type={"date"}
            value={
              this.state.dateInput
                ? this.state.dateInput
                : new Date().toISOString().substr(0, 10)
            }
            onChange={this.inputChange}
          ></input>
          {this.state.fileError ? (
            <div className="error">{this.state.fileError}</div>
          ) : (
            <div className="error"></div>
          )}
          <div>
            <label htmlFor="file-input" id="file-label">
              Browse
            </label>
            {this.state.fileInput ? (
              <span>{this.state.fileInput.split("\\").slice(-1)}</span>
            ) : (
              <span>Choose a file</span>
            )}
            <input
              ref={this.fileRef}
              type={"file"}
              accept=".jpg"
              id="file-input"
              onChange={this.inputChange}
            ></input>
          </div>
          <div>
            {this.state.radioError ? (
              <div className="error">{this.state.radioError}</div>
            ) : (
              <div className="error"></div>
            )}
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
          </div>
          {this.state.selectError ? (
            <div className="error">{this.state.selectError}</div>
          ) : (
            <div className="error"></div>
          )}
          <select ref={this.selectRef}>
            <option value={""}>Don&apos;t Allow</option>
            <option value={"true"}>Allow</option>
          </select>
          {this.state.checkBoxError ? (
            <div className="error">{this.state.checkBoxError}</div>
          ) : (
            <div className="error"></div>
          )}
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
          <label htmlFor="that-checkbox">That</label>
          <button type="submit" onSubmit={this.handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    );
  }
}
export { Form };
