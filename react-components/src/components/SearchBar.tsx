import React from "react";
import { useState } from "react";

export default function SearchBar() {
  const [message, setMessage] = useState(
    localStorage.getItem("last-search") || "search"
  );
  const handleChange = (event: React.SyntheticEvent) => {
    setMessage((event.target as HTMLInputElement).value as string);
    localStorage.setItem(
      "last-search",
      (event.target as HTMLInputElement).value as string
    );
  };
  return (
    <input
      className="search-bar"
      type={"text"}
      onChange={handleChange}
      value={message}
    ></input>
  );
}
