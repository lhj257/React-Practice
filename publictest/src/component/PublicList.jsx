import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import PublicItem from "../model/PublicItem";
import  axios from "axios";

const PublicListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const PublicList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=FhLu0%2F9FVeU1RMq%2FoajQdjme1LlZsfUQYaEgqgcWjfK%2FsY0Yn00ssKDemrH%2FgCtmtRFsKwQ0hDdsJrSWNVaf2w%3D%3D&pageNo=1&numOfRows=10&resultType=json`
      );
      setArticles(response.data.articles);
    };
    resultData();
  }, []);

  if (loading) {
    return <PublicListCss>데이터 받는중(대기중 ....)</PublicListCss>;
  }
  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return null;
  }
  // 로딩도 끝나고, 받아온 데이터가 존재 한다면, 그때 그리기.
  return (
    <PublicListCss>
      {articles.map((article) => (
        // 부모 컴포넌트 : NewList -> 자식 컴포넌트 NewsItem에게 props 로 속성을 전달.
        // article={article} , 하나의 기사의 내용을 통째로 전달.
        <PublicItem key={article.url} article={article} />
      ))}
    </PublicListCss>
  );
};

export default PublicList;
