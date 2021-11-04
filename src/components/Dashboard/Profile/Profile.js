import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../../api/calls/users";
import TableCRUD from "../../Reusable/TableCRUD";
import { getSaleAccountsEN } from "../../../api/calls/sale";
import Table from "../../Reusable/Table";
import { fields } from "../Production/items";
import { useTranslation } from "react-i18next";
const bodyColsMenu = ["first_name", "telegram_id", "createdAt"];

const bodyColsAccounts = fields.map((field) => field.name);

const Profile = () => {
  const [accounts, setaccounts] = useState([]);
  const { t } = useTranslation();
  const headerColsAccounts = fields.map((field) => t(field.name));
  const headerColsMenu = [t("name"), "Т.аккаунт", t("date")];

  useEffect(() => {
    getSaleAccountsEN().then((res) =>
      setaccounts(res.data.data.filter((d) => d.status !== "waiting"))
    );
  }, []);

  return (
    <div class="w3-container">
      <TableCRUD
        addBtn={false}
        title={t("add-profile")}
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getUsers}
        createTableData={() => {}}
        Form={false}
        handleDelete={deleteUser}
      ></TableCRUD>
      <br />
      <br />
      <br />

      <div class="page-header">
        <h2 class="page-header__title">{t("ssold-account")}</h2>
      </div>

      <div style={{ minHeight: "40vh" }}>
        <div style={{ overflow: "auto" }}>
          <Table
            tableData={accounts}
            headerCols={headerColsAccounts}
            bodyCols={bodyColsAccounts}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
