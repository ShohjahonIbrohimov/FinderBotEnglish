import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPayments, payPayment, deletePay } from "../../../api/calls/payment";
import TableCRUD from "../../Reusable/TableCRUD";
import CreateToolForm from "./CreateToolForm";
import CreateToolFormYoomoney from "./CreateToolFormYoomoney";

const bodyColsMenu = ["amount", "customFields", "customer", "status"];

function CreateTool() {
  const [users, setusers] = useState([]);
  const { t } = useTranslation();

  const headerColsMenu = [
    t("summa"),
    t("menu-item9"),
    t("customer"),
    t("status"),
  ];

  const handleUpdatePay = (data) => {
    axios({
      url: "https://api.g-obox.ru/offers/payment/update",
      method: "POST",
      data,
    }).then((res) => setusers(res.data.data));
  };

  return (
    <div class="w3-container">
      <h1>{t("menu-item9")}</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ marginRight: "1.5rem", width: "40%" }}>
          <h3>Qiwi</h3>
          <CreateToolForm />
        </div>
        <div style={{ marginRight: "1.5rem", width: "40%" }}>
          <h3>YooMoney</h3>
          <CreateToolFormYoomoney />
        </div>
      </div>

      <TableCRUD
        title={t("pay-history")}
        headerCols={headerColsMenu}
        bodyCols={bodyColsMenu}
        getTableData={getPayments}
        createTableData={payPayment}
        Form={false}
        handleDelete={deletePay}
        addBtn={false}
        payusers={users}
        handleUpdatePay={handleUpdatePay}
      ></TableCRUD>
    </div>
  );
}

export default CreateTool;
