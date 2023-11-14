import { Button } from "antd";
import React, { useCallback, useRef, useState } from "react";
//준비물, immer 모듈 설치하기.
//yarn add immer
//npm install immer
//간단히, 이름, 나이, 입력란에서, 추가, 삭제(더블클릭이벤트) 예제 이용하기

const ImmerTest = () => {
  //id, 임의로 useRef로 만들어 사용하기
  const nextId = useRef(1);
  // form, 객체의 기본값, name: "", age: ""
  const [form, setForm] = useState({
    name: "",
    age: "",
  });
  // sample data
  const [data, setData] = useState({
    array: [],
    dummyObject: null,
  });
  //이벤트 핸들러
  const onChange = useCallback(
    (e) => {
      //input name 태그의 name 속성과, value 가져오기
      //input age 태그의 name 속성과, value 가져오기
      //비구조화 할당.
      // const name = e.target.name
      // const value = e.target.value
      const { name, value } = e.target;
      setForm({
        //기존 spread 연산자를 이용한, 불변성 유지하면서, 업데이트 하기.
        ...form,
        [name]: [value],
      });
    },
    [form]
  );

  //form 을 등록하는 이벤트 핸들러
  const onSubmit = useCallback(
    (e) => {
      //기본 submit의 기능을 막기 위한 함수.
      e.preventDefault();
      //info data
      const info = {
        //useRef의 값 이용하기.
        id: nextId.current,
        name: form.name,
        age: form.age,
      };
      // sample data의 array에 새항목 추가.
      setData({
        // 기존 spread 연산자를 이용해서, 불변성 유지하면서, 업데이트 하기.
        ...data,
        array: data.array.concat(info),
      });

      // form data 초기화, 입력란 비우기.
      setForm({
        name: "",
        age: "",
      });
      //nextId 값 1증가 시키기
      nextId.current += 1;
      //useCallback의 의존성 배열, data, form.name, form.age 변경시, 새함수 생성
    },
    [data, form.name, form.age]
  );

  //삭제하는 함수
  const onRemove = useCallback(
    // 1매개 변수 : 콜백함수
    (id) => {
      setData({
        // 기존 spread 연산자를 이용해서, 불변성 유지하면서, 업데이트 하기.
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    //2 매개변수
    //의존성 배열
    [data]
  );

  //input 2개, 버튼하나, 리스트 목록
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="이름을 입력해 주세요."
          value={form.name}
          onChange={onChange}
        />
        <input
          name="age"
          placeholder="나이를 입력해 주세요."
          value={form.age}
          onChange={onChange}
        />
        <Button type="submit">등록하기</Button>
      </form>
      {/* 리스트 출력하기. */}
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              이름 : {info.name} , 나이 : {info.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImmerTest;
