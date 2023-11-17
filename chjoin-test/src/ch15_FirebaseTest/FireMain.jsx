import React from "react";
import FireStoreTest from "./FireStoreTest";
import FireStorageTest from "./FireStorageTest";
import FireStorageMultiTest from "./FireStorageMultiTest";

const FireMain = () => {
  return (
    <div>
      <FireStoreTest />
      <FireStorageTest />
      <FireStorageMultiTest />
    </div>
  );
};

export default FireMain;
