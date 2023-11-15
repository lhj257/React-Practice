// context API 테스트 메인으로 사용할 예정
// 부모 컴포넌트로 사용함.
import React from "react";
import ColorContext from "./testColor";
import TestColorBox from "./TestColorBox";

const TestColorMain = () => {
  return (
    <div>
      <ColorContext.Provider value={{ color: "red" }}>
        <TestColorBox />
      </ColorContext.Provider>
    </div>
  );
};

export default TestColorMain;
