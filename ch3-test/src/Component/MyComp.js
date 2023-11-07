import React from "react";
//타입 알아보기 위한 기능 가져오기
import PropTypes from "prop-types";

//자식 컴포넌트
// 부모 컴포넌트로 부터 전달 받은 props 라는 속성을 이용하는 입장.

//방법2
//매개변수 부분에 바로 객체로 할당.
// const MyComp = (props) => {
const MyComp = ({ name, password, children }) => {
  //방법1
  //비구조화 할당 문법으로 한번에 꺼내서 할당하기.
  // const { name, password, children } = props;
  return (
    <div>
      <h1>테스트 props 객체 안에 속성들중에서 name 만 받아오기 :{name}</h1>
      <h1>
        테스트 props 객체 안에 속성들중에서 password 만 받아오기 :{password}
      </h1>
      <h1>테스트 props 객체 안에 속성들중에서 child 받아오기 :{children}</h1>
    </div>
  );
};

//props의 기본값 정하기.
// MyComp.defaultProps = {
//   name: "기본이름",
//   password: "기본 1234",
// };

//props의 타입 확인.
MyComp.propTypes = {
  // 기본값 타입,
  // not null 반드시 존재 확인하기.
  // props 의 명세서 처러므 어떤 props 가 있는지 존재 여부, 타입을 확인 할 수 있다.
  name: PropTypes.string.isRequired,
  password: PropTypes.string,
};

export default MyComp;
