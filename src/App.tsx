import React, { useReducer, useState } from "react";
import Login from "./Auth/login";
import Register from "./Auth/Register";

interface State {
  username: string | null;
  password: string | null;
  email: string | null;
}

type Action =
  | { type: "LOGIN"; username: string; password: string }
  | {
      type: "REGISTER";
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

const initialState: State = {
  username: null,
  password: null,
  email: null,
};

// Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.username,
        password: action.password,
      };

    case "REGISTER":
      return {
        ...state,
        username: action.username,
        password: action.password,
        email: action.email,
      };
    default:
      return state;
  }
};

function App() {
  const [auth, dispatch] = useReducer(reducer, initialState);
  const [first, setfirst] = useState("login");

  // handel dispatch login 
  const handleLogin = (username: string, password: string) => {
    dispatch({ type: "LOGIN", username, password });
    console.log("success login");
  };

  // handel dispatch Register
  const handleRegister = (
    username: string,
    password: string,
    email: string,
    confirmPassword: string
  ) => {
    dispatch({ type: "REGISTER", username, email, password, confirmPassword });
    console.log("success Register");
  };

  return (
    <div className="App">
      <div className="btn">
        <button className="button" onClick={() => setfirst("login")}>
          login
        </button>
        <button className="button" onClick={() => setfirst("Register")}>
          Register
        </button>
      </div>

      {first === "login" ? (
        <div>
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <Register onRgister={handleRegister} />
      )}
    </div>
  );
}

export default App;
