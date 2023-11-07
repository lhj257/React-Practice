//state test 자식 컴포넌트
// 클래스형 컴포넌트 구조 먼저.
// 가볍게 보세요.
// 구현부는 거의 동일함.
// rcc
import React, { Component } from "react";

class Count extends Component {
  //props 전달용, Component 부모 클래스 초기화 같이 진행.
  constructor(props) {
    super(props);
    //state, 초기값 설정.
    this.state = {
      number: 0,
      anotherNumber: 0,
    };
  }
  render() {
    // 비구조화 할당
    const { number, anotherNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>다른 숫자 : {anotherNumber}</h2>
        <button
          //onClick의 값으로 함수를 사용
          onClick={() => {
            this.setState({ number: number + 1 });
            // 한번 클릭 시, 값이 2개가 증가 하도록 설정.
            // 안되는 문제점 확인. (동작여부)
            // 바로 반영이 안되는 문제점.
            // 해결책으로, 객체 대신에 여기에 함수로 대체함.
            // this.setState({ number: this.state.number + 1 });
            //해결책
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
                //state 값 변경 후, 특정 함수 호출하기.
              },
              () => {
                console.log("state 값 변경후, 함수 호출했어요.");
              }
            );
          }}
        >
          +1
        </button>
        <button
          //onClick의 값으로 함수를 사용
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Count;
