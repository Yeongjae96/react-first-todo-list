import React from "react";
import styled from "styled-components";
import color from "constrants/CssColor";

function Topic({children, style}) {
  return <Container style={style}>{children}</Container>;
}

const Container = styled.p`
  font-size: 0.75em;
  min-width: 70%;
  min-height: 30px;
  padding-left: 5px;
  font-size: 1rem;
  text-align: left;
  line-height: 30px;
  border: 1px solid ${color.gray};
  * + & {
    margin-left: 5px;
  }
`;

export default Topic;
