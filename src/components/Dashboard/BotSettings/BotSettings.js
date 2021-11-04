import React from "react";
import { useTranslation } from "react-i18next";
import { getBots, deleteBot, createBot } from "../../../api/calls/bot-settings";
import TableCRUD from "../../Reusable/TableCRUD";
import BotSettingsForm from "./BotSettingsForm";

const BotSettings = ({}) => {
  const { t } = useTranslation();
  const headerCols = [t("name"), t("user-name"), t("token")];
  const bodyCols = ["first_name", "username", "token"];

  return (
    <div>
      <TableCRUD
        title={t("menu-item14")}
        headerCols={headerCols}
        bodyCols={bodyCols}
        getTableData={getBots}
        createTableData={createBot}
        Form={BotSettingsForm}
        handleDelete={deleteBot}
      ></TableCRUD>
    </div>
  );
};

export default BotSettings;
