import React, { FormEvent, useState } from "react";
import Cards from "../util/types/Cards";

type FormProps = {
  updateFormPage?: (card: Cards) => void;
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

function Form(props: FormProps) {
  const [formState, setFormState] = useState({
    dateError: null,
    radioError: null,
    fileError: null,
    checkBoxError: null,
    selectError: null,
    textError: null,
    fileInput: null,
    dateInput: null,
  } as ErrorState);
  const textRef = React.createRef<HTMLInputElement>();
  const dateRef = React.createRef<HTMLInputElement>();
  const fileRef = React.createRef<HTMLInputElement>();
  const redRadioRef = React.createRef<HTMLInputElement>();
  const blueRadioRef = React.createRef<HTMLInputElement>();
  const greenRadioRef = React.createRef<HTMLInputElement>();
  const selectRef = React.createRef<HTMLSelectElement>();
  const thisCheckBox = React.createRef<HTMLInputElement>();
  const thatCheckBox = React.createRef<HTMLInputElement>();
  function getColor() {
    switch (true) {
      case redRadioRef.current?.checked:
        return redRadioRef.current?.value;
      case blueRadioRef.current?.checked:
        return blueRadioRef.current?.value;
      case greenRadioRef.current?.checked:
        return greenRadioRef.current?.value;
      default:
        return null;
    }
  }
  function getThisThat() {
    switch (true) {
      case thisCheckBox.current?.checked && thatCheckBox.current?.checked:
        return `${thisCheckBox.current?.value}${thatCheckBox.current?.value}`;
      case thatCheckBox.current?.checked:
        return thisCheckBox.current?.value;
      case thisCheckBox.current?.checked:
        return thisCheckBox.current?.value;
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errorState: ErrorState = {
      dateError: null,
      radioError: null,
      fileError: null,
      checkBoxError: null,
      selectError: null,
      textError: null,
      fileInput: formState.fileInput,
      dateInput: formState.dateInput,
    };
    const clearErrorState: ErrorState = {
      dateError: null,
      radioError: null,
      fileError: null,
      checkBoxError: null,
      selectError: null,
      textError: null,
      fileInput: null,
      dateInput: null,
    };
    if (
      textRef.current?.value &&
      dateRef.current?.value &&
      fileRef.current?.value &&
      selectRef.current?.value &&
      (thisCheckBox.current?.checked || thatCheckBox.current?.checked) &&
      (redRadioRef.current?.checked ||
        blueRadioRef.current?.checked ||
        greenRadioRef.current?.checked)
    ) {
      const card: Cards = {
        file: fileRef.current?.value,
        name: textRef.current?.value,
        color: getColor(),
        thisThat: getThisThat(),
        date: dateRef.current?.value,
      };
      if (props.updateFormPage) {
        props.updateFormPage(card);
      }
      setFormState(clearErrorState);
      (textRef.current as HTMLInputElement).value = "";
      (dateRef.current as HTMLInputElement).value = "";
      (fileRef.current as HTMLInputElement).value = "";
      (selectRef.current as HTMLSelectElement).value = "true";
      (redRadioRef.current as HTMLInputElement).checked = false;
      (greenRadioRef.current as HTMLInputElement).checked = false;
      (blueRadioRef.current as HTMLInputElement).checked = false;
      (thisCheckBox.current as HTMLInputElement).checked = false;
      (thatCheckBox.current as HTMLInputElement).checked = false;
      alert("Your data was stored");
    } else {
      if (!textRef.current?.value) {
        errorState.textError = "Put some text here";
      }
      if (!dateRef.current?.value) {
        errorState.dateError = "Choose a date";
      }
      if (!fileRef.current?.value) {
        errorState.fileError = "Select a file";
      }
      if (!selectRef.current?.value) {
        errorState.selectError = "Allow to proceed";
      }
      if (!(thisCheckBox.current?.checked || thatCheckBox.current?.checked)) {
        errorState.checkBoxError = "Check something here";
      }
      if (
        !(
          redRadioRef.current?.checked ||
          blueRadioRef.current?.checked ||
          greenRadioRef.current?.checked
        )
      ) {
        errorState.radioError = "Select something here too";
      }
      setFormState(errorState);
    }
  };
  const inputChange = () => {
    const errorState = {
      dateError: formState.dateError,
      radioError: formState.radioError,
      fileError: formState.fileError,
      checkBoxError: formState.checkBoxError,
      selectError: formState.selectError,
      fileInput: fileRef.current?.value,
      dateInput: dateRef.current?.value,
    } as ErrorState;
    setFormState(errorState);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {formState.textError ? (
          <div className="error">{formState.textError}</div>
        ) : (
          <div className="error"></div>
        )}
        <input ref={textRef} type={"text"}></input>
        {formState.dateError ? (
          <div className="error">{formState.dateError}</div>
        ) : (
          <div className="error"></div>
        )}
        <input
          ref={dateRef}
          type={"date"}
          data-testid="date-input"
          value={formState.dateInput ? formState.dateInput : ""}
          placeholder="dd/mm/yy"
          onChange={inputChange}
        ></input>
        {formState.fileError ? (
          <div className="error">{formState.fileError}</div>
        ) : (
          <div className="error"></div>
        )}
        <div>
          <label htmlFor="file-input" id="file-label">
            Browse
          </label>
          {formState.fileInput ? (
            <span>{formState.fileInput.split("\\").slice(-1)}</span>
          ) : (
            <span>Choose a file</span>
          )}
          <input
            ref={fileRef}
            type={"file"}
            accept=".jpg"
            id="file-input"
            onChange={inputChange}
          ></input>
        </div>
        <div>
          {formState.radioError ? (
            <div className="error">{formState.radioError}</div>
          ) : (
            <div className="error"></div>
          )}
          <input
            type={"radio"}
            name="color"
            value={"red"}
            id="red"
            ref={redRadioRef}
          ></input>
          <label htmlFor="red">Red</label>
          <input
            type={"radio"}
            name="color"
            value={"blue"}
            id="blue"
            ref={blueRadioRef}
          ></input>
          <label htmlFor="blue">Blue</label>
          <input
            type={"radio"}
            name="color"
            value={"green"}
            id="green"
            ref={greenRadioRef}
          ></input>
          <label htmlFor="green">Green</label>
        </div>
        {formState.selectError ? (
          <div className="error">{formState.selectError}</div>
        ) : (
          <div className="error"></div>
        )}
        <select ref={selectRef}>
          <option value={""}>Don&apos;t Allow</option>
          <option value={"true"}>Allow</option>
        </select>
        {formState.checkBoxError ? (
          <div className="error">{formState.checkBoxError}</div>
        ) : (
          <div className="error"></div>
        )}
        <input
          ref={thisCheckBox}
          type={"checkbox"}
          name="this-that"
          value="this"
          id="this-checkbox"
        ></input>
        <label htmlFor="this-checkbox">This</label>
        <input
          ref={thatCheckBox}
          type={"checkbox"}
          name="this-that"
          value="that"
          id="that-checkbox"
        ></input>
        <label htmlFor="that-checkbox">That</label>
        <button type="submit" onSubmit={handleSubmit}>
          Confirm
        </button>
      </form>
    </div>
  );
}
export { Form };
