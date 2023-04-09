import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Page not found, error 404</h1>
      <Link to="/">Go back</Link>
    </>
  );
}

export default NotFound;
