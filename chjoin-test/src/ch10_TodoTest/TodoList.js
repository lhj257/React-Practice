import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

//전체 리스트 부분만 css 작업. TodoListCss
const TodoListCss = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListCss>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListCss>
  );
};

export default TodoList;
