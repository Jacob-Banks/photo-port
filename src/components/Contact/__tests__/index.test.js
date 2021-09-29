// __tests__/Contact.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "./Contact";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });
});

describe("Contact b component renders", () => {
  it("renders", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Contact c component renders", () => {
  it("renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });
});
describe("Contact d component renders", () => {
  it("renders", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
