import React from "react";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import { MdRemoveCircleOutline } from "react-icons/md";

//css 파일을 분리해서 작업하지만,
//해당 컴포넌트 내부에서 한번에 css 작업을 같이 하는 경우가 많음.
import styled from "styled-components";

//작업 순서
//1) TodoListItemCSS 2)CheckboxCss 3)TextCss 4)RemoveCss

//컴포넌트 내부에, 각 요소에 css 작업 해보기.

const TodoListItemCSS = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* 짝수 번째 자식 요소의 배경색 지정  &: 현재 본인 요소, div */
  &:nth-child(even) {
    background: #f8f9fa;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const CheckboxCss = styled.div`
  cursor: pointer;
  /* 차지 할 수 있는 영역 모두 차지,  */
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;

const TextCss = styled.div`
  margin-left: 1.5rem;
  flex: 1;
`;

const RemoveCss = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = () => {
  return (
    <TodoListItemCSS>
      <CheckboxCss>
        <GrCheckbox />
        <TextCss>샘플 할일</TextCss>
      </CheckboxCss>
      <RemoveCss>
        <MdRemoveCircleOutline />
      </RemoveCss>
    </TodoListItemCSS>
  );
};

export default TodoListItem;
