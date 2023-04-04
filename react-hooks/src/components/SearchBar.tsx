import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState(
    localStorage.getItem("lastSearch") !== null
      ? localStorage.getItem("lastSearch")
      : ""
  );
  useEffect(() => {
    return () => {
      console.log(value, 1);
      localStorage.setItem("lastSearch", value as string);
    };
  });
  useEffect(() => {
    console.log(value, 3, localStorage.getItem("lastSearch"));
  });
  return (
    <input
      className="search-bar"
      type={"text"}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value as string}
      placeholder="search"
    ></input>
  );
}
