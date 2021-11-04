import React from "react";
import { useTable } from "react-table";
import { tableData } from "./items";
import { AdminImages } from "../../../constants/icons";

function OrderTable() {
  const data = React.useMemo(() => tableData, [tableData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Заказ",
        accessor: "order",
      },
      {
        Header: "Срок заказа",
        accessor: "order_deadline",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Срок Statusа",
        accessor: "status_deadline",
      },

      {
        Header: "Cоздан",
        accessor: "created_at",
      },
      {
        Header: "Изделие",
        accessor: "item",
      },
      {
        Header: "Неисправность",
        accessor: "unfixable",
      },
      {
        Header: "Клиент",
        accessor: "client",
      },
      {
        Header: "Гарантия/Уведомление",
        accessor: "guarantee",
      },
      {
        Header: "Рекламная кампания",
        accessor: "ad_firm",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
      <div className="webmaster_table">
        <table
          {...getTableProps()}
          className=""
          style={{
            borderCollapse: "collopse",
            borderSpacing: "0",
            width: "100%",
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{ textAlign: "start" }}
                  >
                    <span
                      {...column.getHeaderProps()}
                      className="th"
                      style={{ color: "#85879A" }}
                    >
                      {column.render("Header")}
                      <span style={{ marginLeft: "6px" }}>
                        <img
                          style={{ width: "10px", height: "10px" }}
                          src={AdminImages.TableArrows}
                          alt=""
                        />
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <div style={{ marginBottom: "16px" }}></div>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={{
                    backgroundColor: "#E0E3F3",
                    height: "30px",
                    marginBottom: "4px",
                    outline: "2.5px solid #F2F4FF",
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} style={{ padding: "4px" }}>
                        <span>{cell.render("Cell")}</span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;
