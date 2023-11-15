//준비물
// createContext 임포트
//전역으로 사용할 예제 속성추가
// 내보내기 하기.

import { createContext } from "react";

//속성 예시 만들기.
const ColorContext = createContext({ color: "blue" });

//내보내기
export default ColorContext;
