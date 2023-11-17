import React, { useState } from "react";
//스토리지 공식 문서, 샘플 코드 그대로 복사했고
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "./FirebaseConfig";
//storage : 파이어베이스 스토리지에 접근하기 위한 도구, 포인터, 인스턴스
//스토리지 저장소에, 특저 경로를 만들기.
// reactStorage/
// const storage = getStorage();

//파일 선택하는 input, 보여주기 등.
const FireStorageTest = () => {
  const [uploadFile, setUploadFile] = useState();
  const onFileChange = (event) => {
    const files = event.target.files;
    const thisFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const resultData = finishedEvent.currentTarget.result;
      setUploadFile(resultData);
    };
    reader.readAsDataURL(thisFile);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const storageRef = ref(storage, "reactStorage/test");
    // 'file' comes from the Blob or File API

    uploadBytes(storageRef, uploadFile).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" accept="images/*" onChange={onFileChange} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default FireStorageTest;
