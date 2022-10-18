import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { instance } from "../api/request";

const Todopost = ({ inputHandler, todo, onSubmitHandler }) => {
  return (
    <>
      <TodoInput value={todo} onChange={inputHandler} required />
      <SubmitBtn type="submit" onClick={onSubmitHandler}>
        추가
      </SubmitBtn>
    </>
  );
};

export default Todopost;

const TodoInput = styled.input`
  margin: 3rem 1rem 1rem 2rem;
  width: 40vw;
  height: 10vh;
`;

const SubmitBtn = styled.button`
  border: 0;
  border-radius: 10px;
  height: 10vh;
  width:10vw
  margin-left: 1rem;
`;
