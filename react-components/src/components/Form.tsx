import React, { FormEvent, useRef } from "react";

type formProps = {
  num: number;
};

class Form extends React.Component {
  textRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    console.log(
      this.textRef.current?.value,
      this.dateRef.current?.value,
      this.fileRef.current?.value
    );
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
          <input type={"radio"}></input>
          <button type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}
export { Form };
