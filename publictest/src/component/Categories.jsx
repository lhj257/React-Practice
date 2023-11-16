import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "busanAttraction", text: "부산관광명소" },
  { name: "busanFood", text: "부산먹거리" },
];

const CategoriesBlockCss = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoriesCss = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.5rem;

  &:hover {
    color: red;
  }

  // active 클래스 속성 추가.
  // 여기 부분 변경됨, NavLink 방식으로
  &.active {
    font-weight: 600;
    border-bottom: 2px solid violet;
    color: aqua;
    &:hover {
      color: green;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <div>
      <CategoriesBlockCss>
        {categories.map((c) => (
          <CategoriesCss
            key={c.name}
            // NavLink 변경 부분
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={c.name === "all" ? "/" : `/${c.name}`}
          >
            {c.text}
          </CategoriesCss>
        ))}
      </CategoriesBlockCss>
    </div>
  );
};

export default Categories;
