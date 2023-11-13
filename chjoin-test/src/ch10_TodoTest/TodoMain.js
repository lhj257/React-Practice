// 부모 : App, 자식 : TodoMain
// 자식 : Todomain (베이스 컴포넌트)
//전체 가운데 요소로 정렬 시켜주는 템플릿 : TodoBase
//1) 제목 2) 입력란 : TodoInsert 3)리스트 4)리스트의 아이템 등.

import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillRead } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const Main_css = styled.div`
  margin: 0;
  padding: 0;
  // 회색, 배경색은 나중에 본인이 좋아하는 배경색으로 변경
  background: #e9ecef;
`;

const TodoMain = () => {
  //샘플 더미 데이터를 임시 배영레 만들어서, 전달. props 테스트
  const [todos, setTodos] = useState([
    { id: 1, text: "더미 데이터 요소 1번 입니다.", checked: true },
    { id: 2, text: "더미 데이터 요소 2번 입니다.", checked: false },
    { id: 3, text: "더미 데이터 요소 3번 입니다.", checked: true },
  ]);

  //추가로 입력이 되는 todo 부분의 아이디를 id:4 부터 할당 할 예정
  const nextId = useRef(4);

  //TodoMain -> TodoInsert 자식 컴포넌트에게 , props 로 함수를 전달하기.
  // onInsert 라는 함수는, onChange 함수와는 다르게,
  // 매번 새로운 함수를 생성함. 이유는 함수 안에 갑ㄳ이, 배열이 변경이 되어서,
  // todos  배열의 변경에 따라서, 동작하게 만들기.
  const onInsert = useCallback(
    (text) => {
      const todo = {
        // const nextId = useRef(4); 4부터 할당.
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  //지우기 기능 함수 추가하기.
  //데이터 추가시 : 내장 함수, concat 이용해서 새로운 배열생성
  //데이터 삭제시 : 내장 함수, filter 이용해서 새로운 배열생성
  // 콜백함수, 조건 일치하는 요소만 뽑아서, 새로 생성함.
  const onRemove = useCallback(
    (id) => {
      // 만약 id가 2를 선택했다면, todo.id !== id,
      // 선택된  id 2를 제외한 나머지 요소를 뽑아서(필터해서) 새로운 배열 생성
      // 결론, 선택된 id 2를 제거하는 효과와 같다.
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <Main_css>
      {/* Todo 만들기 준비 메인 <AiFillRead /> */}
      <TodoBase>
        {/* 위에서 만든 useCallback함수를 자식 컴포넌트에게 전달하기. */}
        <TodoInsert onInsert={onInsert} />
        {/* 위에서 만든 임시 데이터 배열을 전달 : props 속성으로 전달 */}
        {/* 제거하는 함수를 props를 이용해서, 전달 */}
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoBase>
    </Main_css>
  );
};

export default TodoMain;
