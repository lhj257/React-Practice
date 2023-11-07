import logo from "./logo.svg";
import "./App.css";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";
import Test from "./Component/Test";

//부모 컴포넌트
function App() {
  return (
    <div>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      {/* 함수형, 클래스형 컴포넌트의 이름 첫 시작 대문자로 해야 인식. */}
      <Test />
      <FuncTest1 />
      <ClassTest />
    </div>
  );
}

export default App;
