import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../model/NewsItem";
import axios from "axios";

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
  //useEffect 이용해서, 마운트시, 최초1회 데이터 받아오기.
  //create, update, delete 없어서,
  // 단순, 데이터만 가져오기 때문에,
  //REST API 서버에서 데이터를 다 받으면, articles 에 넣기
  const [articles, setArticles] = useState(null);
  // 만약, 데이터를 받고 있는 중이면, loading 값을 true,
  // 데이터를 다 받으면, loading 값을 false 로 변경하기.

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=b7adb4f936494b3bac62f446ab7686cb"
        );
        // console.log(response.data);
        //해당 주소를 입력해서, 모델링 조사할 때, 이미 구조를 다 봤음.
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; //resultData async 함수 블럭 끝부분,
    //비동기 함수 만들어서, 사용하기.
    resultData();
  }, []); //의존성 배열 부분의 모양은 빈배열, 최초 1회 마운트시 한번만 호출.

  //주의사항, 데이터 널 체크하기.
  if (loading) {
    return <NewListCss>데이터 받는중(대기중......)</NewListCss>;
  }

  //데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return null;
  }
  //로딩도 끝나고, 받아온 데이터가 존재 한다면, 그때 그리기.
  return (
    <NewListCss>
      {articles.map((article) => (
        // 부모 컴포넌트 : NewList -> 자식 컴포넌트 NewsItem 에게 props로 속성을 전달
        // article={article}, 하나의 기사의 내용을 통째로 전달.
        <NewsItem key={article.url} article={article} />
      ))}
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
    </NewListCss>
  );
};

export default NewList;