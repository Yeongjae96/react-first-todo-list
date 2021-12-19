import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";
import http from "utils/http";

function TodoTemplate() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

  const handleSubmit = (title) => {
    const todo = {
      id: nextId.current,
      title,
      completed: false,
    };

    http
      .request({
        url: "todo",
        method: "post",
        data: todo,
      })
      .then((response) => {
        if (response.data) {
          setTodos(todos.concat(response.data));
          nextId.current = response.data.id + 1;

          console.log(nextId.current);
        }
      });
  };

  const onRemove = (id) => {
    deleteTodo(id)
      .then((response) => {
        if (response.data) {
          setTodos(todos.filter((todo) => todo.id !== id));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onToggle = (todoParam) => {
    todoParam.completed = !todoParam.completed;

    http
      .request({
        url: `todo`,
        method: "put",
        data: todoParam,
      })
      .then((response) => {
        if (response.data) {
          setTodos(
            todos.map((todo) => {
              return todo;
            }),
          );
        }
      });
  };

  const getTodoList = () => {
    return http.request({
      url: "todo",
    });
  };

  const deleteTodo = (id) => {
    return http.request({
      url: `todo/${id}`,
      method: "delete",
    });
  };

  const init = () => {
    getTodoList()
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {});
  };

  useEffect(init, []);

  return (
    <Container>
      <TodoTitle>TODO LIST - eassy</TodoTitle>
      <TodoInsert onSubmit={handleSubmit} />
      <TodoItemList todoList={todos} onRemove={onRemove} onToggle={onToggle} />
    </Container>
  );
}

const Container = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;

  & > * {
    margin-bottom: 20px;
  }
`;

export default TodoTemplate;
