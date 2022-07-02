import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shopData.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

export const CategoryContext = createContext({
  products: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    // console.log(categoryMap)
    getCategoriesMap();
  }, []);

  //   useEffect(() => {
  //     addCollectionAndDocument("collection", SHOP_DATA);
  //   }, []);

  const value = { categoriesMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
