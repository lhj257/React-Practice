import React, { Component } from "react";
import PropTypes from "prop-types";
// 클래스형 컴포넌트 형식, rcc 코드 스니펫으로 자동완성 한 결과.
class MyCompPublicFunction extends Component {
  render() {
    //비구조화 할당 문법으로 한번에 꺼내서 할당하기.
    const { name, password, children } = this.props;
    return (
      <div>
        <h1>테스트 props 객체 안에 속성들중에서 name 만 받아오기 :{name}</h1>
        <h1>
          테스트 props 객체 안에 속성들중에서 password 만 받아오기 :{password}
        </h1>
        <h1>테스트 props 객체 안에 속성들중에서 child 받아오기 :{children}</h1>
      </div>
    ); //return close
  } //render close
} //class close

//props의 기본값 정하기.
MyCompPublicFunction.defaultProps = {
  name: "기본이름",
  password: "기본 1234",
};

//props의 타입 확인.
MyCompPublicFunction.propTypes = {
  // 기본값 타입,
  // not null 반드시 존재 확인하기.
  // props 의 명세서 처러므 어떤 props 가 있는지 존재 여부, 타입을 확인 할 수 있다.
  name: PropTypes.string.isRequired,
  password: PropTypes.string,
};

export default MyCompPublicFunction;
