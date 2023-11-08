//Main 임시 페이지
import React from "react";
//yarn add react-router-dom
// npm install react-router-dom
//라우팅 모듈, 도구 설치.
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

//styled-component, 컴포넌트에서 좀더 편하게 css 작업하는 모듈.
//yarn add styled-components
//npm install styled-components
//확장팩 : styled-components
//설치 후, 모듈 가져와서 사용하기.
import styled from "styled-components";
import { Component } from "react";

//styled-component 사용해보기
//예제
//styled.원하는 태그 선택 `(백틱)  `(백틱)
//이 사이에 css문법을 작성.
const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: aqua;
  text-align: center;
`;

//Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//Container 만들기
const Container = styled.div`
  width: 100%;
  max-width: 720px;

  //& : 현재 태그
  //div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고
  // 각 요소의 마진 바텀을 16 px 씩 간격을 주겠다.
  & {
    :not(:last:child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  //useNavigate 라는 훅스 이용해서, 페이징 하기..
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <h1>메인 화면입니다.</h1>
        {/* css적용하기 */}
        <Container>
          <MainTitleTextCss>
            <p>styled-components test</p>
          </MainTitleTextCss>
          <MainTextCss>
            <p>두번째 텍스트 효과 확인하기</p>
          </MainTextCss>
          {/* join 컴포넌트로 이동하는 버튼 하나추가 */}
          <Button
            title="회원가입 이동"
            type="primary"
            onClick={() => navigate("/join")}
          >
            회원가입 이동
          </Button>
          <Button
            title="MyCount 이동"
            type="primary"
            onClick={() => navigate("/mycount")}
          >
            MyCount 이동
          </Button>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
