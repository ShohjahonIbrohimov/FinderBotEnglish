import React from "react";
import { createState, getStates } from "../../../api/calls/states";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./StatesForm";

const headerCols = ["Name", "Категория"];
const bodyCols = ["name", "category_id"];

function ProductsForm() {
  return (
    <TableCRUD
      title="Добавления состояние"
      headerCols={headerCols}
      bodyCols={bodyCols}
      getTableData={getStates}
      createTableData={createState}
      Form={CreateProductForm}
      handleDelete={() => {}}
    ></TableCRUD>
  );
}

export default ProductsForm;
