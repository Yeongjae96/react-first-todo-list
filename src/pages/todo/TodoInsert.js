import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

import TextInput from "components/TextInput";
import AddButton from "components/AddButton";

function TodoInsert({onSubmit}) {
  const [content, setContent] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;

    onSubmit(content);
    setContent("");
  };

  return (
    <Container>
      <Form>
        <TextInput
          type="text"
          name="text"
          placeholder="Hey, input here -"
          value={content}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <AddButton type="submit" onClick={handleSubmit}>
          ADD
        </AddButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TodoInsert;
