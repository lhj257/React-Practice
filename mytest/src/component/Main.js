import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <h1>메인 화면입니다.</h1>
        <Button title="로그인 이동" onClick={() => navigate("/login")}>
          로그인
        </Button>

        <Button title="회원가입 이동" onClick={() => navigate("/join")}>
          회원가입
        </Button>
      </div>
    </Wrapper>
  );
};

export default Main;
