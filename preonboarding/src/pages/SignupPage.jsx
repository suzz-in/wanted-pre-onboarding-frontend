import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { onSignUp } from "../api/request";

const SignupPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: inputs.email,
      password: inputs.password,
    };
    if (!email.includes("@")) {
      alert("이메일 형식을 확인해주세요");
    }
    if ([...password].length < 8) {
      alert("비밀번호는 8자 이상 입력해주세요");
    } else {
      console.log(data);
      // await instance.post("/auth/signup", data);
      await onSignUp(data);
      alert("회원가입 완료!");
      navigate("/");
    }
  };
  return (
    <div>
      <LoginContainer>
        <LoginLabel htmlFor="id">이메일</LoginLabel>
        <LoginInput
          name="email"
          type="text"
          value={email}
          onChange={onChangeHandler}
          placeholder="이메일을 입력해주세요"
        />
        <LoginLabel htmlFor="pw">비밀번호</LoginLabel>
        <LoginInput
          name="password"
          type="password"
          value={password}
          onChange={onChangeHandler}
          placeholder="비밀번호를 입력해주세요"
        />

        <LoginButton onClick={submitHandler}>가입완료</LoginButton>
      </LoginContainer>
    </div>
  );
};

export default SignupPage;

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

const LoginLabel = styled.label`
  text-align: left;
  color: gray;
  font-size: 14px;
  display: block;
  text-align: left;
`;
