import React from "react";
import TableCRUD from "../../Reusable/TableCRUD2";
import MenuForm from "./ImportantNewsForm";
import {
  createBotText,
  deleteInfo,
  getInfos,
} from "../../../api/calls/bot-text";
import { useTranslation } from "react-i18next";

const Menu = ({}) => {
  const { t } = useTranslation();

  const headerColsMenu = [t("name"), t("status")];
  const bodyColsMenu = ["description", "status_info"];

  return (
    <div class="w3-container">
      <h2>{t("menu-item1")}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "50%" }}>
          <TableCRUD
            title={t("menu-item1")}
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getInfos}
            createTableData={createBotText}
            Form={MenuForm}
            handleDelete={deleteInfo}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
