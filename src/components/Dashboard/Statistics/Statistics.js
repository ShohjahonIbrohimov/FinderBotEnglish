import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { deleteSupport, getSupports } from "../../../api/calls/support";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateSupportLinkForm from "./CreateSupportLinkForm";

const bodyCols = [
  "username",
  "description",
  "ticked_cod",
  "user_id",
  "telegram_id",
  "telegram_nick",
];

const Statistics = ({}) => {
  const [open, setopen] = useState(false);
  const { t } = useTranslation();

  const headerCols = [
    t("user-name"),
    t("description"),
    t("ticket"),
    t("user_id"),
    "ID TG",
    "Ник TG",
  ];

  return (
    <div class="w3-container">
      <TableCRUD
        title={`${t("add")} ${t("menu-item11")}`}
        headerCols={headerCols}
        bodyCols={bodyCols}
        getTableData={getSupports}
        createTableData={() => {}}
        Form={false}
        handleDelete={deleteSupport}
        addBtn={false}
      ></TableCRUD>

      <div style={{ width: "40%" }}>
        <h3>Support Link</h3>
        <CreateSupportLinkForm />
      </div>
    </div>
  );
};

export default Statistics;
