import React, {useState} from "react";
import styled from "styled-components";
import Color from "constrants/CssColor";
import trashPath from "assets/images/icon/trash.png";
import checkPath from "assets/images/icon/check.png";

import DoneButton from "components/DoneButton";
import Topic from "components/Topic";
import DeleteButton from "components/DeleteButton";
import IconImg from "components/IconImg";

function TodoItem({todo, onRemove, onToggle}) {
  const {id, title, completed} = todo;

  return (
    <Container>
      <DoneButton
        onClick={() => {
          onToggle(todo);
        }}
      >
        {completed ? <CheckImg src={checkPath} /> : null}
      </DoneButton>
      <Topic
        style={{
          textDecoration: completed ? "line-through" : null,
          color: completed ? "#ccc" : "#000",
        }}
      >
        {title}
      </Topic>
      <DeleteButton onClick={() => onRemove(id)}>
        <IconImg src={trashPath} size="m" />
      </DeleteButton>
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CheckImg = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(50%);
  margin-right: 3px;
`;

export default TodoItem;
