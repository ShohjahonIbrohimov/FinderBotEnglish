import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import "./Table.css";
import { tableData } from "./items";
import { general_icons, webmaster_icons } from "../../../constants/icons";

import Loader from "../../Reusable/Loader";
import { useSelector, useDispatch } from "react-redux";
import { get_finance_all } from "../../../redux/finance/thunks";

export default function FinanceTable({
  setcurrentUser,
  finance_data,
  handleDelete,
  setopen,
}) {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const financeData = useSelector((state) => state.financeReducer.finance);

  useEffect(() => {
    financeData.data.length ? setloading(false) : setloading(true);
  }, []);

  const data = React.useMemo(() => financeData.data, [financeData.data]);

  const handleRefresh = () => {
    dispatch(get_finance_all());
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Месенжер",
        accessor: "messenger",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Кошелек",
        accessor: "payment_card",
      },
      {
        Header: "Сумма",
        accessor: "payment_price",
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
      case "payment_price":
        return (
          <span>
            {cell.row.original.payment_price}{" "}
            {cell.row.original.payment_currency === "rub" ? "₽" : "$"}
          </span>
        );
      case "status":
        return (
          <span>
            {cell.row.original.status === 0 ? (
              <span
                onClick={() => {
                  setopen(true);
                  setcurrentUser(cell.row.original);
                }}
              >
                Ожидание
              </span>
            ) : cell.row.original.status === 1 ? (
              "Активен"
            ) : (
              "Блокирован"
            )}
          </span>
        );
      default:
        return cell.render("Cell");
    }
  };
  const getStatusColor = (cell) => {
    switch (cell.row.original.statusCode) {
      case 0:
        return "red";
        break;
      case 1:
        return "blue";
      case 2:
        return "green";
      default:
        return cell.render("Cell");
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    headerGroups,
    page,
    prepareRow,
    selectedFlatRows,
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

  console.log(financeData);

  return (
    <>
      <button
        className={`${
          financeData.data.length ? "" : "btn-disabled"
        } btn-custom width-auto`}
        onClick={handleRefresh}
        disabled={financeData.data.length ? false : true}
      >
        {general_icons.cycle}
      </button>
      <Loader loading={loading} />

      <div className={"webmaster_table"}>
        <div className={loading ? "table_wrapper" : ""}>
          {!loading && !financeData.data.length && (
            <div className="no_table_data">
              <span>Данные не найдены :(</span>
            </div>
          )}
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
            <tbody className="finance_tbody" {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    style={{ backgroundColor: "#E0E3F3" }}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={"td " + getStatusColor(cell)}
                        >
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
    </>
  );
}
