import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Table = ({
  tableData,
  headerCols,
  bodyCols,
  handleDelete,
  handleDownload,
  payusers,
  handleUpdatePay,
}) => {
  const [username, setusername] = useState("");
  const { t } = useTranslation();

  const handleSelectChange = (e) => {
    setusername(e.target.value);
  };

  return (
    <table>
      <tr>
        {headerCols.map((col) => (
          <th>{col}</th>
        ))}
        <th></th>
      </tr>
      <tbody>
        {tableData.map((p) => (
          <tr>
            {bodyCols.map((col) => {
              if (col === "username") {
                return <td>@{p[col]}</td>;
              } else if (col === "description" || col === "name") {
                return (
                  <td>
                    <span className="three_dots">
                      {p[col]}{" "}
                      <div className="content">
                        <p>{p[col]}</p>
                      </div>
                    </span>
                  </td>
                );
              } else if (col === "image") {
                return (
                  <td>
                    <span class="icon_wrap">
                      <i class="bx bx-image" style={{ color: "#555" }}></i>
                      <img
                        class="image"
                        src={`https://api.g-obox.ru/${p[col]}`}
                        alt=""
                      />
                    </span>
                  </td>
                );
              } else if (col === "amount") {
                return <td style={{ minWidth: "150px" }}>{p[col].value} ₽</td>;
              } else if (col === "customFields") {
                return (
                  <td style={{ minWidth: "150px" }}>
                    {p[col].paySourcesFilter}
                  </td>
                );
              } else if (col === "customer") {
                return <td style={{ minWidth: "150px" }}>{p[col].account}</td>;
              } else if (col === "status") {
                return (
                  <td style={{ minWidth: "150px" }}>
                    {p[col].value === "PAID" ||
                    p[col].value === "SUCCESS" ||
                    p[col].value === "succeeded" ? (
                      <span style={{ color: "#5cb85c", fontWeight: "bold" }}>
                        {t("paid")}
                      </span>
                    ) : (
                      <span style={{ color: "#e54d4e", fontWeight: "bold" }}>
                        {t("not-paid")}
                      </span>
                    )}
                  </td>
                );
              } else if (col === "status_info") {
                return (
                  <td style={{ minWidth: "150px" }}>
                    {p.status ? (
                      <span style={{ color: "#5cb85c", fontWeight: "bold" }}>
                        доставлено
                      </span>
                    ) : (
                      <span style={{ color: "#e54d4e", fontWeight: "bold" }}>
                        не доставлено
                      </span>
                    )}
                  </td>
                );
              } else if (col.indexOf("Дата")) {
                return <td style={{ minWidth: "150px" }}>{p[col]}</td>;
              } else {
                return <td>{p[col]}</td>;
              }
            })}
            <td style={{ display: "flex", justifyContent: "space-around" }}>
              <span class="icon_wrap" onClick={() => handleDelete(p._id)}>
                <i class="bx bxs-trash-alt" style={{ color: "#555" }}></i>
              </span>
              {handleDownload && (
                <a
                  href={`https://api.g-obox.ru/api/download/file/send/${p._id}`}
                  target="_blank"
                >
                  <span class="icon_wrap">
                    <i class="bx bxs-download" style={{ color: "#555" }}></i>
                  </span>
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
