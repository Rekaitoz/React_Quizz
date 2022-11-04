import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import Login from "./pages/login/Login";

describe("QuizPage", () => {
  //   screen.debug();
  const log = console.log; // save original console.log function
  beforeEach(() => {
    console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    console.log = log; // restore original console.log after all tests
  });

  test("input text for Username, Password with true value", () => {
    render(<Login />);
    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: { value: "Diaken" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /password/i }), {
      target: { value: "test123" },
    });

    fireEvent.click(screen.getByTestId("submit"));
    expect(console.log.mock.calls[0][0]).toBe("notfound");
  });

  //   test("input text for Username, Password with false value", () => {
  //     render(<Login />);
  //     fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
  //       target: { value: "Diakwaf" },
  //     });
  //     fireEvent.input(screen.getByRole("textbox", { name: /password/i }), {
  //       target: { value: "tfafa" },
  //     });

  //     fireEvent.click(screen.getByTestId("submit"));
  //     expect(console.log.mock.calls[0][0]).toBe("success");
  //   });
});
