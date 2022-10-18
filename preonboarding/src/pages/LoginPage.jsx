import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API, instance, onLogin } from "../api/request";
import styled from "styled-components";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onChange1 = (e) => {
    setEmail(e.target.value);
  };

  const onChange2 = (e) => {
    setPassword(e.target.value);
  };

  const sendRequestLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log("data", data);
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 정확히 입력해주세요");
    }
    if (!email.includes("@")) {
      alert("이메일 형식을 확인해주세요");
    }
    if (![...password].length) {
      alert("비밀번호는 8자 이상 입력해주세요");
    }
    try {
      const response = await onLogin(data);
      // const response = await instance.post("/auth/signin", data);
      console.log("response", response);
      localStorage.setItem("access_token", response.data.access_token);
      alert("로그인완료!");
      setSubmitted(true);
      navigate("/todo");
    } catch (error) {
      alert("아이디와 비밀번호를 확인해주세요.");

      console.log(error);
    }
  };
  useEffect(() => {
    console.log("token", localStorage.getItem("access_token"));
    if (localStorage.getItem("access_token") !== null) {
      navigate("/todo");
    }
  }, []);

  return (
    <div>
      <LoginContainer>
        <label htmlFor="id"></label>
        <LoginInput
          value={email}
          onChange={onChange1}
          type="text"
          placeholder="이메일"
          // pattern="^[A-Za-z0-9]{5,12}$"
        />
        <label htmlFor="pw"></label>
        <LoginInput
          value={password}
          onChange={onChange2}
          type="password"
          placeholder="비밀번호"
          // pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$`}
        />
        <LoginButton type="submit" onClick={sendRequestLogin}>
          로그인
        </LoginButton>

        <LoginButton onClick={(e) => navigate("/signup")}>회원가입</LoginButton>
      </LoginContainer>
    </div>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px;
`;

const LoginInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  height: 40px;
  width: 50%;
  padding: 0;
  margin-bottom: 8px;
  text-align: left;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: skyblue;
  color: white;
  height: 40px;
  padding: 0;
  margin-bottom: 8px;
  display: block;
  width: 50%;
  text-align: center;
`;
