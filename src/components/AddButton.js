import React from "react";
import styled from "styled-components";

function AddButton({type, children, onClick}) {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  border: 0;
  background-color: #aacc55;
  height: 30px;
  border-radius: 5px;
  input + & {
    margin-left: 10px;
  }
`;

export default AddButton;
