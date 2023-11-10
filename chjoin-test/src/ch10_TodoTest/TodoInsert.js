import { Button } from "antd/es/radio";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";
//아이콘 이름
//MdAddCircleOutline

const FormCss = styled.form`
  display: flex;
  background: white;
`;

const FormInputCss = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: black;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  flex: 1;
`;

const FormButtonCss = styled.button`
  background: none;
  outline: none;
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
`;

const TodoInsert = () => {
  return (
    <FormCss>
      <FormInputCss placeholder="Todo 입력해주세요" />
      <FormButtonCss type="primary">
        <IoMdAddCircleOutline />
      </FormButtonCss>
    </FormCss>
  );
};

export default TodoInsert;
