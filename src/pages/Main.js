import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import TodoTemplate from "./todo/TodoTemplate";
function Main() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <TodoTemplate />
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #425364
  }

  p {
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
`;

export default Main;
