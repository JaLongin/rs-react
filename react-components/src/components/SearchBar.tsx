import React from "react";

export default class SearchBar extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      value:
        localStorage.getItem("lastSearch") !== null
          ? localStorage.getItem("lastSearch")
          : "",
    };
  }
  componentDidMount(): void {
    if (localStorage.getItem("lastSearch") !== null) {
      this.setState({ value: localStorage.getItem("lastSearch") });
    } else {
      localStorage.setItem(
        "lastSearch",
        (this.state as { value: string }).value
      );
    }
  }
  componentWillUnmount(): void {
    localStorage.setItem("lastSearch", (this.state as { value: string }).value);
  }
  render(): React.ReactNode {
    return (
      <input
        className="search-bar"
        type={"text"}
        onChange={(e) => {
          this.setState({ value: e.target.value });
        }}
        value={(this.state as { value: string }).value}
        placeholder="search"
      ></input>
    );
  }
}
