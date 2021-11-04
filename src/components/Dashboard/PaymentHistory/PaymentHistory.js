import React, { useState } from "react";
import TableCRUD from "../../Reusable/TableCRUD2";
import MenuForm from "./PaymentHistoryForm";
import { getPayments, payPayment } from "../../../api/calls/payment";
import { useTranslation } from "react-i18next";

const headerColsMenu = ["Сумма", "Способ оплаты", "Покупатель", "Status"];
const bodyColsMenu = ["amount", "customFields", "customer", "status"];

const Menu = ({}) => {
  const { t } = useTranslation();

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
            getTableData={getPayments}
            createTableData={payPayment}
            Form={MenuForm}
            handleDelete={() => {}}
          ></TableCRUD>
        </div>
      </div>
    </div>
  );
};

export default Menu;
