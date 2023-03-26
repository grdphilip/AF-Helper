import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const title = document.title;
  expect(title).toBe("");
});
