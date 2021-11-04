import React from "react";
import TableCRUD from "../../../Reusable/TableCRUD2";

import MenuForm from "./ImportantNewsForm";
import {
  createInfo,
  deleteInfo,
  getInfos,
} from "../../../../api/calls/important-info";
import { useTranslation } from "react-i18next";

const Menu = ({}) => {
  const { t } = useTranslation();
  const headerColsMenu = [t("name"), t("status")];
  const bodyColsMenu = ["description", "status_info"];

  return (
    <div class="w3-container">
      <h2>{t("menu-item2")}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "50%" }}>
          <TableCRUD
            title={t("menu-item2")}
            headerCols={headerColsMenu}
            bodyCols={bodyColsMenu}
            getTableData={getInfos}
            createTableData={createInfo}
            Form={MenuForm}
            handleDelete={deleteInfo}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
