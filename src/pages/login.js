import axios from "../utils/axios";
import React, { useState } from "react";
import styled from "styled-components";

const Login = ({ history }) => {
  const [is_have_account, setHaveAccount] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [f_name, setF_Name] = useState();
  const [l_name, setL_Name] = useState();
  const [password, setPassword] = useState();

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setF_Name("");
    setL_Name("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (is_have_account) {
      const data = { username, password };
      const resp = await axios.post("/api/login", data).catch(() => {
        resetForm();
        showErrorText("Wrong Credentials!");
      });
      if (resp && resp.status===201) {
        localStorage.setItem("token", resp.data.token);
        history.push("/");
      } 

    } else {
      const data = { username, email, f_name, l_name, password };
      const resp = await axios.post("/api/signup", data).catch(() => {
        resetForm();
        showErrorText("Wrong credentials.");
      });
      if (resp && resp.status === 201) {
        resetForm();
        showSuccessText("Sucessfully registered.");
        setHaveAccount(true);
      } else if (resp && resp.status === 202) {
        resetForm();
        showErrorText("User already exists!");
      }
    }
  };

  const showSuccessText = (msg) => {
    setSuccessText(msg);
    setTimeout(() => setSuccessText(""), 7000);
  };
  const showErrorText = (msg) => {
    setErrorText(msg);
    setTimeout(() => setErrorText(""), 7000);
  };
  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeader children={is_have_account ? "Login" : "Create Account"} />
        {errorText && <ErrorText>{errorText}</ErrorText>}
        {successText && <SuccessText>{successText}</SuccessText>}
        <InputBox
          placeholder="Username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {!is_have_account && (
          <>
            <InputBox
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <NameContainer>
              <InputBox
                placeholder="First Name"
                type="text"
                required
                value={f_name}
                onChange={(e) => setF_Name(e.target.value)}
              />
              <InputBox
                placeholder="Last Name"
                type="text"
                required
                value={l_name}
                onChange={(e) => setL_Name(e.target.value)}
              />
            </NameContainer>
          </>
        )}
        <InputBox
          placeholder="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginBtn
          value={is_have_account ? "Login" : "Submit"}
          type="submit"
          full_width
        />
        <BottonText>
          {is_have_account
            ? "Don't have an account?"
            : "Already have an account?"}
          <LoginSignUpLink
            children={is_have_account ? "SignUp" : "Login"}
            onClick={(e) => {
              resetForm();
              setHaveAccount(!is_have_account);
            }}
          />
        </BottonText>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
`;

const LoginHeader = styled.p`
  font-size: 1.7rem;
  color: white;
  text-align: center;
  margin: 0 10px 20px 10px;
  font-weight: bold;
  text-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const LoginForm = styled.form`
  background-color: #293e4b;
  /* margin-top: 10%; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  padding: 20px;
  column-gap: 20px;
`;
const NameContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const InputBox = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 10px;
  font-size: 1rem;
  &:focus {
    border: 3px solid #555;
  }
`;
const LoginBtn = styled.input`
  background-color: #4caf50;
  width: ${(props) => props.full_width && "100%"};
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const BottonText = styled.div`
  margin-top: 25px;
  display: flex;
  color: #f1f1f1;
  justify-content: center;
  gap: 4px;
`;
const LoginSignUpLink = styled.a`
  color: hotpink;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: white;
  font-size: 1.2rem;
  background: red;
  padding: 5px;
  border-radius: 5px;
`;
const SuccessText = styled.p`
  color: white;
  font-size: 1.2rem;
  background: lightgreen;
  padding: 5px;
  border-radius: 5px;
`;

export default Login;
