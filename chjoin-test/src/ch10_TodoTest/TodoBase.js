import React from "react";
import styled from "styled-components";
//TodoBaseTemp
//AppTitle
//Content

const TodoBaseTemp = styled.div``;
const AppTitle = styled.div``;
const Content = styled.div``;

const TodoBase = ({ children }) => {
  return (
    <TodoBaseTemp>
      <AppTitle>일정관리 미니프로젝트</AppTitle>
      <Content>{children}</Content>
    </TodoBaseTemp>
  );
};

export default TodoBase;
