import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../api/request";
import Todo from "../components/Todo";
import Todopost from "../components/Todopost";
import useInput from "../hooks/useInput";

const TodoPage = () => {
  const [todolist, setTodoList] = useState();
  const navigate = useNavigate();
  const [todo, inputHandler, setTodo] = useInput("");

  //가져오기
  const gettodolist = async () => {
    const { data } = await getTodo();
    setTodoList(data);
  };
  useEffect(() => {
    gettodolist();
  }, []);

  //투두 생성
  const onSubmitHandler = async () => {
    const { data: newTodo } = await addTodo({ todo });
    setTodo("");
    setTodoList([...todolist, newTodo]);
  };

  //삭제
  const delTodo = async (id) => {
    await deleteTodo(id);
    setTodoList(todolist.filter((todo) => todo.id !== id));
  };

  //수정

  const editTodo = async (id, todo, isCompleted) => {
    const data = { id, todo, isCompleted };
    await updateTodo(data);
    setTodoList(
      todolist?.map((todos) =>
        todos.id === id ? { ...todos, todo, isCompleted } : todos
      )
    );
  };

  //리다이렉트
  const memberChk = () => {
    if (localStorage.getItem("access_token")) {
      getTodo();
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    memberChk();
  }, [navigate]);

  return (
    <TodoContainer>
      <h3 style={{ margin: "10px auto 10px auto", textAlign: "center" }}>
        TODO
      </h3>
      <Todopost
        onSubmitHandler={onSubmitHandler}
        inputHandler={inputHandler}
        todo={todo}
      />
      <div>
        {todolist?.map((todo) => (
          <Todo
            key={todo.id}
            todos={todo}
            delTodo={delTodo}
            editTodo={editTodo}
            // onToggle={onToggle}
          />
        ))}
      </div>
    </TodoContainer>
  );
};

export default TodoPage;

const TodoContainer = styled.div`
  background-color: skyblue;
  width: 500px;
  height: 800px;
  margin: auto;
  border-radius: 20px;
`;
