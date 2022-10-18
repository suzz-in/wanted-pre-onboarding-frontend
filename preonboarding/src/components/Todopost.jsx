import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { instance } from "../api/request";

const Todopost = ({ inputHandler, todo, onSubmitHandler }) => {
  return (
    <InputDiv>
      <TodoInput value={todo} onChange={inputHandler} required />
      <SubmitBtn type="submit" onClick={onSubmitHandler}>
        추가
      </SubmitBtn>
    </InputDiv>
  );
};

export default Todopost;

const InputDiv = styled.div`
  display: flex;
  margin: 1rem 3rem 1rem 6rem;
`;

const TodoInput = styled.input`
  width: 40vw;
  height: 10vh;
`;

const SubmitBtn = styled.button`
  border: 0;
  border-radius: 10px;
  height: 10vh;
  width:10vw
  margin-left: 2rem;
`;
