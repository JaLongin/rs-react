import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { App, WrappedApp } from "./App";

describe("App", () => {
  it("Renders smth", () => {
    render(<WrappedApp />);
    //
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello World");
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
});
