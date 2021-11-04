import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import "./Table.css";
import { webmaster_icons } from "../../../constants/icons";
import { tableData } from "./items";
import { Link } from "react-router-dom";

export default function FinanceTable({ finance_data, handleDelete }) {
  const data = React.useMemo(() => tableData, [tableData]);
  const [loading, setloading] = useState(false);
  console.log(data);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Login",
        accessor: "login",
      },
      {
        Header: "Password",
        accessor: "password",
      },
      {
        Header: "Кошелек",
        accessor: "pocket",
      },
      {
        Header: "Cтатус",
        accessor: "status",
      },
    ],
    []
  );

  const getCustomContent = (cell) => {
    switch (cell.column.id) {
      // case "id":
      //     return <span>{cell.row?.original?.id ? '' : Math.floor(Math.random() * 50)}</span>
      case "name":
        return (
          <Link
            style={{ color: "#4E5C86" }}
            to={`/master/${cell.row?.original.id}/edit`}
          >
            <span>{cell.row?.original.name}</span>
          </Link>
        );
      default:
        return cell.render("Cell");
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="webmaster_table">
      <div className="table_wrapper">
        <table
          {...getTableProps()}
          style={{ borderSpacing: "0", width: "100%" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    <span {...column.getHeaderProps()} className="th">
                      {column.render("Header")}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
            <div className="thead_border_bottom"></div>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={{ backgroundColor: "#EBEDFA", borderRadius: "5px" }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="td">
                        <span className="span-td">
                          {getCustomContent(cell)}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="react-tabele-pagination d-flex justify-end">
        <div className="mt-32">
          <span className="mr-16">Показывать</span>

          <select
            className="pageSize mr-16"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <button
            className="mr-16 btn-custom outlined"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            В начало
          </button>
          <button
            className="mr-16 btn-custom outlined"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Передущая
          </button>
          <span className="mr-16 pageIndex">{pageIndex + 1}</span>
          <button
            className="mr-16 btn-custom outlined"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Следущая
          </button>
          <button
            className=" btn-custom outlined"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            В конец
          </button>
        </div>
      </div>
    </div>
  );
}
