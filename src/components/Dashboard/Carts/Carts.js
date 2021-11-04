import React from "react";
import { useTranslation } from "react-i18next";
import { createCart, getCarts, deleteCart } from "../../../api/calls/cart";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CartsForm";

const bodyCols = [
  "name",
  "category_id",
  "states_id",
  "price",
  "image",
  "description",
];

function ProductsForm() {
  const { t } = useTranslation();

  const headerCols = [
    t("name"),
    t("category"),
    t("stateid"),
    t("price"),
    t("image"),
    t("description"),
  ];

  return (
    <TableCRUD
      title={t("menu-item6")}
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getCarts}
      createTableData={createCart}
      Form={CreateProductForm}
      handleDelete={deleteCart}
      addBtn={false}
    ></TableCRUD>
  );
}

export default ProductsForm;
