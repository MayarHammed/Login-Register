import axios from "axios";
import React, { useState } from "react";

interface RegisterProps {
  onRgister: (
    username: string,
    password: string,
    email: string,
    confirmPassword: string
  ) => void;
}

export default function Register({ onRgister }: RegisterProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // handel ok
  const [ok, setOk] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRgister(username, password, email, confirmPassword);
    try {
      const res = await axios.post("API");
      setOk("successfully Login !");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="user_register" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="input_register"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="input_register"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="input_register"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            minLength={8}
            maxLength={20}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input_register"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button className="btn_reg" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
