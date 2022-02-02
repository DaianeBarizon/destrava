import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";

import { SimulatorMock } from "./index";

describe("<SimulatorMock />", () => {
  it("should render", () => {
    render(<SimulatorMock />);
  });
});
