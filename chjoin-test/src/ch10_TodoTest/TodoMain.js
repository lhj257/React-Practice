// 부모 : App, 자식 : TodoMain
// 자식 : Todomain (베이스 컴포넌트)
//전체 가운데 요소로 정렬 시켜주는 템플릿 : TodoBase
//1) 제목 2) 입력란 : TodoInsert 3)리스트 4)리스트의 아이템 등.

import React from "react";
import styled from "styled-components";
import { AiFillRead } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";
import TodoListItem from "./TodoListItem";

const Main_css = styled.div`
  margin: 0;
  padding: 0;
  // 회색, 배경색은 나중에 본인이 좋아하는 배경색으로 변경
  background: #e9ecef;
`;

const TodoMain = () => {
  return (
    <Main_css>
      {/* Todo 만들기 준비 메인 <AiFillRead /> */}
      <TodoBase>
        <TodoInsert />
        <TodoListItem />
      </TodoBase>
    </Main_css>
  );
};

export default TodoMain;
