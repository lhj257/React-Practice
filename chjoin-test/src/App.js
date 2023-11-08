import logo from "./logo.svg";
import "./App.css";
import Join from "./component/Join";
import { Button, Space, DatePicker, version } from "antd";
//페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import MyCount from "./component/MyCount";
import { Component } from "react";

function App() {
  return (
    //페이지 이동을 위한 설정 2 . 전체 요소를
    //BrowserRouter 로 감싸기.
    //구성요소는 Routes -> Route 로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할(index-> 주소에서 : /) 페이지를 App 또는 Main.js로 해도됨 */}
        <Route index element={<Main />} />
        {/* 주소: http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />
        {/* 추가, 3장에서 연습했던, MyComp라는 컴포넌트 페이지 이동에 추가해보기 */}
        <Route path="mycount" element={<MyCount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
