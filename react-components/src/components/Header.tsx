import React from "react";
import { Link } from "react-router-dom";
import { withRouter, WithRouterProps } from "../HOCs/withRouter";
import pageList from "../assets/data/pagesList.json";

function Header({ location }: WithRouterProps) {
  const pagePath = location.pathname.slice(1);
  return (
    <header className="header">
      {pagePath === "" ? <h1>Home</h1> : <></>}
      {pagePath !== "" && pageList.includes(pagePath) ? (
        <h1>{pagePath}</h1>
      ) : (
        <></>
      )}
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/About"} className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Header);
