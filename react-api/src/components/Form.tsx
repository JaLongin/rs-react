import React, { useState } from "react";
import Cards from "../util/types/Cards";
import { FieldValues, useForm } from "react-hook-form";

type FormProps = {
  updateFormPage: (card: Cards) => void;
};
type ErrorState = {
  fileError: string | undefined;
  dateError: string | undefined;
  selectError: string | undefined;
  radioError: string | undefined;
  textError: string | undefined;
  checkError: string | undefined;
};
function Form(props: FormProps) {
  const [errorState, setErrorState] = useState({} as ErrorState);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    const error: ErrorState = {
      fileError: "",
      dateError: "",
      selectError: "",
      radioError: "",
      textError: "",
      checkError: "",
    };
    const card: Cards = {
      file: "",
      name: "",
      color: "",
      thisThat: "",
      date: "",
    };
    card.file = data.file[0].name;
    card.name = data.name;
    card.color = data.color;
    card.thisThat = data.thisThat
      ? (data.thisThat as [string]).reduce((el, acc) => (acc += el), "")
      : "";
    card.date = data.date;
    console.log(data);
    if (
      !card.name ||
      !card.date ||
      !data.allowance ||
      !card.color ||
      !card.file ||
      !card.thisThat
    ) {
      if (!card.name) {
        error.textError = "Please write some text here";
      }
      if (!card.date) {
        error.dateError = "Please select a date";
      }
      if (!data.allowance) {
        error.selectError = "Please allow";
      }
      if (!card.color) {
        error.radioError = "Select color";
      }
      if (!card.file) {
        error.fileError = "Select a picture";
      }
      if (!card.thisThat) {
        error.checkError = "Check something";
      }
      setErrorState(error);
    } else {
      reset();
      setErrorState({} as ErrorState);
      props.updateFormPage(card);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="error">
          {errorState.textError ? errorState.textError : ""}
        </div>
        <input type="text" {...register("name")}></input>
        <div className="error">
          {errorState.dateError ? errorState.dateError : ""}
        </div>
        <input type="date" {...register("date")}></input>
        <div className="error">
          {errorState.radioError ? errorState.radioError : ""}
        </div>
        <input
          type="radio"
          {...register("color")}
          value={"green"}
          id="radio-green"
        ></input>
        <label htmlFor="radio-green">Green</label>
        <input
          type="radio"
          {...register("color")}
          value={"red"}
          id="radio-red"
        ></input>
        <label htmlFor="radio-red">Red</label>
        <div className="error">
          {errorState.fileError ? errorState.fileError : ""}
        </div>
        <input type="file" accept=".jpg" {...register("file")}></input>
        <div className="error">
          {errorState.checkError ? errorState.checkError : ""}
        </div>
        <input
          type="checkbox"
          {...register("thisThat")}
          value={"This"}
          id="checkbox-this"
        ></input>
        <label htmlFor="checkbox-this">This</label>
        <input
          type="checkbox"
          {...register("thisThat")}
          value={"That"}
          id="checkbox-that"
        ></input>
        <label htmlFor="checkbox-that">That</label>

        <div className="error">
          {errorState.selectError ? errorState.selectError : ""}
        </div>
        <select {...register("allowance")}>
          <option value={""} defaultChecked>
            Don&apos;t Allow
          </option>
          <option value={"true"}>Allow</option>
        </select>
        <br />
        <button type="submit" className="confirm">
          Confirm
        </button>
      </form>
    </div>
  );
}
export { Form };
