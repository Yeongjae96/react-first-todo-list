import React from "react";
import styled from "styled-components";
import Color from "constrants/CssColor";
function DoneButton({id, children, onClick}) {
  return (
    <Button onClick={onClick}>
      {children ? children : <Checkbox type="checkbox" />}
    </Button>
  );
}

const Button = styled.button`
  border: 0;
  background-color: initial;
  width: 2rem;
  height: 2rem;
  margin-right: 10px;
  & > img {
    cursor: pointer;
  }
`;

const Checkbox = styled.input`
  position: relative;
  width: 2em;
  height: 2em;
  color: $black;
  border: 1px solid ${Color.gray};
  border-radius: 50px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: relative;
    content: '';
    display: block;
    top: 5px;
    left: 10px;
    width: 8px;
    height: 14px;
    border-style: solid;
    border-color: ${Color.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: ${Color.black};
    border-color: ${Color.green};
    background: ${Color.green};
    &::before {
      opacity: 1;
    }
    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
`;

export default DoneButton;
