import React from "react";
import { useTranslation } from "react-i18next";
import { getSms, deleteSms } from "../../../api/calls/sms";
import TableCRUD from "../../Reusable/TableCRUD";

const bodyColsMenu = [
  "sms",
  "type",
  "phone",
  "user_id",
  "telegram_id",
  "telegram_nick",
];

const SMS = () => {
  const { t } = useTranslation();

  const headerColsMenu = [
    "SMS",
    t("type"),
    t("phone"),
    t("user_id"),
    "TG ID",
    "TG nick",
  ];

  return (
    <div class="w3-container">
      <TableCRUD
        addBtn={false}
        title="SMS"
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getSms}
        createTableData={() => {}}
        handleDelete={deleteSms}
      ></TableCRUD>
    </div>
  );
};

export default SMS;
