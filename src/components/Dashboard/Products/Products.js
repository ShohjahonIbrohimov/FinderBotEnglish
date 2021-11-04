import React from "react";
import { useTranslation } from "react-i18next";
import {
  getProductsEN,
  deleteProductEN,
  createProductRU,
  getProductsRU,
  deleteProductRU,
  createProductEN,
} from "../../../api/calls/product";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./ProductsForm";
import { useSelector } from "react-redux";

const bodyCols = [
  "name",
  "type_name",
  "states_name",
  "showcase_name",
  "price",
  "image",
  "category_name",
  "description",
];

function ProductsForm() {
  const { t } = useTranslation();
  const language = useSelector((state) => state.langReducer.language);

  const headerCols = [
    t("platform"),
    t("type"),
    t("geo"),
    t("showcase"),
    t("price"),
    t("image"),
    t("category"),
    t("description"),
  ];

  return (
    <TableCRUD
      // overflow={"none"}
      title={t("menu-item5")}
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={language === "en" ? getProductsEN : getProductsRU}
      createTableData={language === "en" ? createProductEN : createProductRU}
      Form={CreateProductForm}
      handleDelete={language === "en" ? deleteProductEN : deleteProductRU}
    ></TableCRUD>
  );
}

export default ProductsForm;
