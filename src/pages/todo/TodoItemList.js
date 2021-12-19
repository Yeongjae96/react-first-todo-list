import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoItemList({todoList, onRemove, onToggle}) {
  return (
    <Container>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  & > * {
    margin-bottom: 1px;
  }
`;

export default TodoItemList;
