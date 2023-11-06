import React from "react";

// jsx 를 사용하기 전에
// 일반 자바스크립트로 똑같은 기능을 구현시
// 문법 비교

function test() {
  return React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("b", null, "react")
  );
}

// JSX 문법으로 구현.
function test2() {
  return (
    <div>
      Hello , <b>react</b>
    </div>
  );
}
