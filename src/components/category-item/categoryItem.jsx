import React from "react";
import "./categoryItem.scss";

const CategoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Jackets</p>
      </div>
    </div>
  );
};

export default CategoryItem;
