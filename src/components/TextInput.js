import React from "react";
import styled from "styled-components";

function TextInput({type, name, placeholder, value, onChange}) {
  return (
    <Container
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
}

const Container = styled.input`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: gray;
  width: 60%;
  padding: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: italic;
    font-size: 1rem;
  }
`;

export default TextInput;
