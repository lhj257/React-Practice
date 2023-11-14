import React from "react";
import styled from "styled-components";
import NewsItem from "../model/NewsItem";

//뉴스 아이템 요소를 출력을 감싸는 목록부분에 해당하고,
//미디어쿼리 넣어서, 약간 반응형으로, 특정 크기를 기준으로
// 웹 브라우저의 창의 크기가 변경시, 화면 사이즈 적용되기.
const NewListCss = styled.div`
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

// 더미 데이터
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://www.naver.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewList = () => {
  return (
    <NewListCss>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewListCss>
  );
};

export default NewList;
