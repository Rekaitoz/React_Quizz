import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import client from "../appolo/apollo-client";
import { store, persistor } from "../store/store";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Guest from "../pages/guest/Guest";
import Home from "../pages/home/Home";
import CreateQuiz from "../pages/createquiz/CreateQuiz";
import ListQuiz from "../pages/listquiz/ListQuiz";

describe("AuthPage", () => {
  const log = console.log; // save original console.log function
  beforeEach(() => {
    console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    console.log = log; // restore original console.log after all tests
  });
  //
  test("checking value At Login for input username and password", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/login"]}>
            <Login />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );

    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: { value: "Diaken" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Password/), {
      target: { value: "test123" },
    });
    expect(screen.getByPlaceholderText(/Username/)).toHaveValue("Diaken");
    expect(screen.getByPlaceholderText(/Password/)).toHaveValue("test123");
  });
  //
  test("Checking Button submit At Login for input text for Username, Password", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/login"]}>
            <Login />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: { value: "Diaken" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Password/), {
      target: { value: "test123" },
    });

    fireEvent.click(screen.getByTestId("enter"));

    expect(console.log.mock.calls[0][0]).toBe("success");
  });
  //
  test("checking value At Register for input New username, password and New Password", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/register"]}>
            <Register />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );

    fireEvent.input(screen.getByPlaceholderText(/New Username/), {
      target: { value: "Diaken" },
    });
    fireEvent.input(screen.getByPlaceholderText("Password..."), {
      target: { value: "test123" },
    });
    fireEvent.input(screen.getByPlaceholderText("Confirm Password..."), {
      target: { value: "test123" },
    });

    expect(screen.getByPlaceholderText(/New Username/)).toHaveValue("Diaken");
    expect(screen.getByPlaceholderText("Password...")).toHaveValue("test123");
    expect(screen.getByPlaceholderText("Confirm Password...")).toHaveValue(
      "test123"
    );
  });
  //
  test("Checking Button submit At Register for input text for New Username, Password and New Password", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/register"]}>
            <Register />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    fireEvent.input(screen.getByPlaceholderText(/New Username/), {
      target: { value: "Diaken" },
    });
    fireEvent.input(screen.getByPlaceholderText("Password..."), {
      target: { value: "test123" },
    });
    fireEvent.input(screen.getByPlaceholderText("Confirm Password..."), {
      target: { value: "test123" },
    });

    fireEvent.click(screen.getByTestId("enter"));

    expect(console.log.mock.calls[0][0]).toBe("success");
  });
  //
  test("checking value At Guest for input Name", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/guest"]}>
            <Guest />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );

    fireEvent.input(screen.getByPlaceholderText(/Your Name/), {
      target: { value: "Diaken" },
    });

    expect(screen.getByPlaceholderText(/Your Name/)).toHaveValue("Diaken");
  });
  //
  test("Checking Button submit At Guest for input text for New Username, Password and New Password", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/guest"]}>
            <Guest />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    fireEvent.input(screen.getByPlaceholderText(/Your Name/), {
      target: { value: "Diaken" },
    });

    fireEvent.click(screen.getByTestId("enter"));

    expect(console.log.mock.calls[0][0]).toBe("success");
  });
});

describe("MainPage", () => {
  const log = console.log; // save original console.log function
  beforeEach(() => {
    console.log = jest.fn(); // create a new mock function for each test
  });
  afterAll(() => {
    console.log = log; // restore original console.log after all tests
  });
  //
  test("checking Title Of the Home", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Home />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    expect(screen.getByText("Welcome To Quizz")).toBeInTheDocument();
  });
  //
  test("checking Paragrap Of the Home", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Home />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    expect(
      screen.getByText(
        "in this application you can do quizzes made by other users and can also make quizzes so that they can be done by your friends or other users"
      )
    ).toBeInTheDocument();
  });
  //
  test("checking Paragrap Of the Home", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Home />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    expect(
      screen.getByText(
        "in this application you can do quizzes made by other users and can also make quizzes so that they can be done by your friends or other users"
      )
    ).toBeInTheDocument();
  });
  //
  test("checking Title Of the Listquiz", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/listquiz"]}>
            <ListQuiz />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    expect(screen.getByText("Choose Your Quiz")).toBeInTheDocument();
  });
  //
  test("checking Title Of the CreateQuiz", () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/createquiz"]}>
            <CreateQuiz />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    expect(screen.getByText("Create Your Own Quiz")).toBeInTheDocument();
  });
  //
});
