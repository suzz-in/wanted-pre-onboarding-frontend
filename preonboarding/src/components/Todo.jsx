import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

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
        <Ckinput
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
  width: 80%;
  margin: 1rem auto 0 auto;
  display: flex;
  background-color: #feffed;
  border-radius: 20px;
`;
const Ckinput = styled.input`
  margin-left: 2rem;
`;

const Tododiv = styled.div`
  width: auto;
  height: auto;
  margin: 1rem 1rem 1rem 1rem;
  text-align: center;
`;

const Button = styled.button`
  width: 6vw;
  height: 4vh;
  margin-top: 1rem;
  border: 0;
  border-radius: 6px;
`;
