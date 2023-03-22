import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { App, WrappedApp } from "./App";
import Card from "./components/Card";
import About from "./pages/About";
import SearchBar from "./components/SearchBar";

describe("App", () => {
  it("Has nav bar", () => {
    render(<WrappedApp />);
    //
    expect(screen.getByRole("navigation")).toHaveClass("navbar");
  });
  it("Render not found if incorrect path", () => {
    render(
      <MemoryRouter initialEntries={["/aaa"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("not found");
  });
  it("Card has heading", () => {
    render(<Card imgSrc="" name="Hey" desc="Lorem" />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Hey");
  });
  it("Has about page with correct sub-heading", () => {
    render(<About />);
    //
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("About");
  });
  it("Search bar has default message on first render", () => {
    render(<SearchBar />);
    //
    expect(screen.getByRole("textbox")).toHaveClass("search-bar");
  });
});
