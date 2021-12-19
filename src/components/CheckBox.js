import React from "react";
import styled from "styled-components";

function CheckBox({id, name, text}) {
  return (
    <>
      <input type="checkbox" id={id} name={name} />
      <label htmlFor={id}>{text}</label>
    </>
  );
}

export default CheckBox;
