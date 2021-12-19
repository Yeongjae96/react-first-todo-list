import React from "react";
import styled from "styled-components";
import CssColor from "constrants/CssColor";

function DeleteButon({id, children, onClick}) {
  const clickEvent = () => {
    console.log("click");
    onRemove();
  };

  return (
    <Button type="button" id={id} onClick={onClick}>
      {children ? children : "Done"}
    </Button>
  );
}

const Button = styled.button`
  border: 0px;
  background-color: ${CssColor.white};
  * + & {
    margin-left: 10px;
  }
`;

export default DeleteButon;
