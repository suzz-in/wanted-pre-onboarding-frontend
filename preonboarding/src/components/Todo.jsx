import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
// import TodoEdit from "./TodoEdit";

function Todo({ todos, delTodo, editTodo }) {
  const { id, todo, isCompleted } = todos;

  const [editMode, setEditMode] = useState(false);
  const [complete, setComplete] = useState(isCompleted);
  const [updatedTodo, inputHandler] = useInput(todo);
  console.log(todos);

  const completed = (e) => {
    setComplete(e.target.checked);
    // console.log(complete);
    editTodo(id, updatedTodo, !complete);
  };

  const edit = () => {
    setEditMode(!editMode);
  };

  const editHandler = () => {
    editTodo(id, updatedTodo, complete);
    edit();
  };

  const deleteHandler = () => {
    delTodo(id);
  };
  return (
    <>
      <Todobox>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={completed}
          // onClick={() => completed(id)}
        />
        {editMode ? (
          <>
            <input type="text" value={updatedTodo} onChange={inputHandler} />
            <Button onClick={editHandler}>수정완료</Button>
            <Button onClick={edit}>수정취소</Button>
          </>
        ) : (
          <>
            <Tododiv>{todo}</Tododiv>
            <Button onClick={edit}>수정</Button>
            <Button onClick={deleteHandler}>삭제</Button>
          </>
        )}
      </Todobox>
    </>
  );
}
export default Todo;

const Todobox = styled.div`
  width: auto;
  display: flex;
  background-color: pink;
`;

const Tododiv = styled.div`
  /* background-color: green; */
  width: auto;
  height: auto;
  margin: 1rem 2rem 1rem 2rem;
  text-align: center;
`;

const Button = styled.button`
  width: 12vw;
  height: 3vh;
  margin-top: 1rem;
`;
