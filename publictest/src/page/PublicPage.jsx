import React from "react";
import PublicList from "../component/PublicList";
import Categories from "../component/Categories";
import { useParams } from "react-router-dom";

const PublicPage = () => {
  const params = useParams();
  // 카테고리 기본값 : all, 나머지는 선택된 카테고리 값으로 사용.
  const category = params.category || "all";
  return (
    <div>
      <Categories />
      <PublicList category={category} />
    </div>
  );
};

export default PublicPage;
