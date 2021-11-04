import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  createSaleAccountEN,
  getSaleAccountsEN,
  deleteSaleAccountEN,
  createSaleAccountRU,
  getSaleAccountsRU,
  deleteSaleAccountRU,
} from "../../../api/calls/sale";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateProductForm from "./CreateProductForm";
import { fields } from "./items";
import { useSelector } from "react-redux";

function CreateCreative() {
  const { t } = useTranslation();
  const headerCols = fields.map((field) => t(field.name));
  const bodyCols = fields.map((field) => field.name);
  const language = useSelector((state) => state.langReducer.language);

  const handleDownload = (id) => {
    axios({
      url: `/download/file/send/${id}`,
      method: "GET",
    }).then((blob) => {});
  };

  return (
    <div>
      <TableCRUD
        modalWidth={"90%"}
        title={t("menu-item4")}
        headerCols={headerCols}
        bodyCols={bodyCols}
        getTableData={language === "en" ? getSaleAccountsEN : getSaleAccountsRU}
        createTableData={
          language === "en" ? createSaleAccountEN : createSaleAccountRU
        }
        Form={CreateProductForm}
        handleDelete={
          language === "en" ? deleteSaleAccountEN : deleteSaleAccountRU
        }
        handleDownload={handleDownload}
      ></TableCRUD>
    </div>
  );
}

export default CreateCreative;
