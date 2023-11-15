import React from "react";
//전역 속성 가져오기
import ColorContext from "./testColor";

//전역에서 설정한 속성 가져오기.
// Consumer 라는 속성을 이용해서, 전역의 값을 사용하기.
const TestColorBox = () => {
  return (
    <div>
      {/* Consumer 속성 이용해서 */}
      <ColorContext.Consumer>
        {/* 값 가져오기 */}
        {(value) => (
          <div
            style={{
              width: "64px",
              height: "64px",
              // 임의의 value 매개변수(객체) 속성으로 color 가져오기
              // 파란색 박스 맞는지 확인하기.
              background: value.color,
            }}
          ></div>
        )}
      </ColorContext.Consumer>
    </div>
  );
};

export default TestColorBox;
