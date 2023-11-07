import logo from "./logo.svg";
import "./App.css";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";
import Test from "./Component/Test";
import MyComp from "./Component/MyComp";
import MyCompPublicFunction from "./Component/MyCompPublicFunction";
import Count from "./Component/Count";
import MyCount from "./Component/MyCount";
import MySay from "./Component/MySay";

//부모 컴포넌트
function App() {
  return (
    <div>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      {/* 함수형, 클래스형 컴포넌트의 이름 첫 시작 대문자로 해야 인식. */}
      {/* <Test />
      <FuncTest1 />
      <ClassTest /> */}

      {/* 자식 컴포너트에게 props 라는 속성 객체를 이용해서 이름을 전달하기 */}
      {/* <MyComp name="이호진" password="1234" /> */}

      {/* 부모 컴포넌트에서 props 설정이 없을때, 기본값 사용하기 */}
      {/* <MyComp /> */}

      {/* 자식 컴포넌트에게 child라는 속성으로 전달하기. */}
      {/* <MyComp>여기 값이 child 속성임.</MyComp> */}

      {/* <MyComp name="이호진" password="1234">
        이호진 이호진 이호진
      </MyComp> */}

      {/* props 타입 확인하기. */}
      {/* <MyComp password="1234">이호진 이호진 이호진</MyComp> */}

      {/* 클래스형 컴포넌트 버전으로 확인하기 */}
      {/* <MyCompPublicFunction password="1234">
        이호진 이호진 이호진
      </MyCompPublicFunction> */}

      {/* 클래스형 컴포넌트 */}
      {/* <Count /> */}

      {/* 함수형 컴포넌트 */}
      {/* <MyCount /> */}

      <MySay />
    </div>
  );
}

export default App;
