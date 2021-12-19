import React from "react";
import styled from "styled-components";

function TodoTitle({children}) {
  return <Container>{children}</Container>;
}

const Container = styled.p`
  font-weight: bold;
  color: #eebb58;
  font-size: 2.5rem;
  text-align: center;
`;

export default TodoTitle;
