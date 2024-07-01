import { FC, FormEvent, useRef } from "react";
import { Services } from "../components/Forms/apiServices.ts";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginPage: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current && passRef.current) {
      Services.handleUser(emailRef, passRef, navigate);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width:'400px',
          backgroundColor: "lightblue",
          padding: "10px",
          margin:'20px'
        }}
      >
        <div>
          Email: <input type="text" ref={emailRef} required />
        </div>
        <div>
          Password: <input type="password" ref={passRef} required />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
