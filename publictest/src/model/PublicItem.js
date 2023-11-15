import React from "react";
import { styled } from "styled-components";

const PublicItemCss = styled.div`
  display: flex;
  //이미지, thumbnail
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 170px;
      height: 130px;
      // 해당 사이즈에 비율에 맞게 이미지 크기 조정.
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: blue;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      //텍스나 내용이 일반적인 공백과 줄 바꿈 규칙을 따름.
      // 브라우저의 너비에 따라 자동으로 줄바꿈됨.
      white-space: normal;
    }
  }
  // & : 현재 요소 , 각 뉴스 목록의 요소
  // 각 뉴스 아이템 요소가 배치가 될때, 간격을 주겠다.
  // & + & : 형제 연산자, 요소의 이웃, 같은 요소를 나열 시.
  //
  & + & {
    margin-top: 3rem;
  }
`;

const PublicItem = ({ article }) => {
  // MAIN_TITLE, ADDR1, CNTCT_TEL, HOMEPAGE_URL, TRFC_INFO
  // 		USAGE_DAY_WEEK_AND_TIME, MAIN_IMG_NORMAL, ITEMCNTNTS
  const {
    MAIN_TITLE,
    CNTCT_TEL,
    MAIN_IMG_NORMAL,
    ADDR1,
    HOMEPAGE_URL,
    TRFC_INFO,
    USAGE_DAY_WEEK_AND_TIME,
    ITEMCNTNTS,
  } = article;
  return (
    <PublicItemCss>
      {/* 조건부 렌더링으로 출력하기.  */}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>연락처 : {CNTCT_TEL}</p>
        {MAIN_IMG_NORMAL && (
          <div className="thumbnail">
            {/* 링크 클릭시, target="_blank" : 새창 으로 열기 
          rel="noopener noreferrer" : 새창으로 열었을 때, 
          원본 링크의 참조라든지, 개인 정보 부분을 막아주기. */}
            <img src={MAIN_IMG_NORMAL} alt="thumbnail" />
          </div>
        )}
        <p>교통정보 : {TRFC_INFO}</p>
        <p>운영 및 시간 : {USAGE_DAY_WEEK_AND_TIME}</p>
        <p>주소 : {ADDR1}</p>
        <p>홈페이지 : {HOMEPAGE_URL}</p>
        <p>{ITEMCNTNTS}</p>
      </div>
    </PublicItemCss>
  );
};

export default PublicItem;
