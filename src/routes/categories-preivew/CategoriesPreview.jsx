import React from "react";

import { useContext, Fragment } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import "./CategoriesPreview.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);
  // console.log(categoriesMap);
  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
