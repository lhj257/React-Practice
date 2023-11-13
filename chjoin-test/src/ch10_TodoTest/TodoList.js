import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

//전체 리스트 부분만 css 작업. TodoListCss
const TodoListCss = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

//부모에서 전달한 props 속성을, 자식 컴포넌트에서 가져오기
//제거하는 함수를 전달 받아서, 사용하기.
{
  /* <TodoList todos={todos} onRemove={onRemove} /> */
}
const TodoList = ({ todos, onRemove }) => {
  return (
    <TodoListCss>
      {/* 부모에서 전달받은 데이터를 사용해보기 */}
      {todos.map((todo) => (
        //  TodoList 부모 컴포넌트에, 다시 , 자식 컴포넌트인 TodoListItem에게 props로 전달중
        // todo 속성과, key 속성 전달함
        // 목록요소가 출력시 반드시, key 명시해야함, 그래야 오류가 없고, 속도빠름.

        //TodoMain -> TodoList -> TodoListItem 에게, 지우는 기능의 함수를 전달.
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem /> 
      자식에서, 더미 데이털 직접 만들어서 사용했다면*/}
    </TodoListCss>
  );
};

export default TodoList;
