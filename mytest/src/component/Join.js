import React from "react";
import { useState, useRef } from "react";
import { Avatar, Button } from "antd";
import { styled } from "styled-components";

const Join = () => {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [File, setFile] = useState("");

  const fileInput = useRef(null);

  const onChangeImage = (e) => {
    // 선택된 파일이 첫번째 사진.
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      // 취소가 발생했다면,
      // 기본 프로필 베이직 사진.
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    // 선택된 사진을 , 결과뷰에 출력하는 로직.
    const reader = new FileReader();
    reader.onload = () => {
      // reader.readyState
      // 0 : 비어있는 상태
      // 1: 로딩 중
      // 2: 로딩 완료
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    // 파일 데이터를 URL로 읽어오는 함수
    reader.readAsDataURL(e.target.files[0]);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      //email input -> name : email, value : 실제 입력된 값
      //password input -> name : password, value : 실제 입력된 값
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert("email : " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };

  // 키보드에서 엔터키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const Wrapper = styled.div`
    padding: 20px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Wrapper>
      <div>
        <h1>회원가입</h1>
        <Avatar
          src={Image}
          size={200}
          onClick={() => fileInput.current.click()}
        />
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/jpg, image/png, image/jpeg"
          name="profileImg"
          onChange={onChangeImage}
          //설정2
          ref={fileInput}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="이메일 입력 해주세요."
          value={email}
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="패스워드를 입력 해주세요."
          value={password}
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
        />
        <br />
        <Button type="primary" onClick={onClick}>
          회원가입
        </Button>
      </div>
    </Wrapper>
  );
};

export default Join;
