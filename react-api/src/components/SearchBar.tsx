import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState(
    localStorage.getItem("lastSearch") !== null
      ? localStorage.getItem("lastSearch")
      : ""
  );

  useEffect(() => {
    function cleanUp() {
      localStorage.setItem("lastSearch", value as string);
    }
    window.addEventListener("beforeunload", cleanUp);
    return () => {
      cleanUp();
      window.removeEventListener("beforeunload", cleanUp);
    };
  }, [value]);
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
