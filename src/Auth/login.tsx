import axios from "axios";
import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // handel ok
  const [ok, setOk] = useState("");

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
    try {
      const res = await axios.post("API");
      setOk("successfully Login !");
    } catch (error) {
      console.log(error)
      
  };

}
  // handel_changeinput
  const HandelChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const HandelChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Username:
        <input
          className="input_login"
          type="text"
          value={username}
          onChange={HandelChangeUser}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          className="input_login"
          type="password"
          value={password}
          onChange={HandelChangePassword}
          minLength={8}
          maxLength={20}
          required
        />
      </label>
      <br />
      <button className="btn_log" type="submit">Login</button>
    </form>
  );
}
