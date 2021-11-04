import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import Button from "../../../Reusable/Button";

import style from "../../Webmaster/Table.module.css";
import { AdminImages } from "../../../../constants/icons";
import { Link } from "react-router-dom";
import Loader from "../../../Reusable/Loader";
import { general_icons } from "../../../../constants/icons";
import { useSelector, useDispatch } from "react-redux";

function UTable() {
  const [loading, setloading] = useState(false);

  const users = useSelector((state) => state.usersReducer.users);
  useEffect(() => {
    users.length ? setloading(false) : setloading(true);
  }, []);

  const data = React.useMemo(() => users, [users]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Электронная Email",
        accessor: "email",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Роль",
        accessor: "role",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Действия",
        accessor: "actions",
      },
    ],
    []
  );
  const handleDelete = (id) => {
    console.log(id);
  };

  const getCustomContent = (cell) => {
    switch (cell.column.id) {
      case "role":
        let role = "";
        switch (cell.row.original.role) {
          case 0:
            role = "Поьзователь";
            break;
          case 1:
            role = "Веб мастер";
            break;
          case 2:
            role = "Менеджер";
            break;
          case 3:
            role = "СЕО";
            break;
          default:
            role = "Не задданно";
            return;
        }
        return <span>{role}</span>;

      case "status":
        let status = "";
        switch (cell.row.original.status) {
          case 0:
            status = "Активен";
            break;
          case 1:
            status = "Блокирован";
            break;
          case 2:
            status = "Ожидание";
            break;
          default:
            status = "Не задданно";
            return;
        }
        return <span>{status}</span>;
      case "actions":
        return (
          <div className="table_actions d-flex">
            {cell.row.original.role === 0 ? (
              <Link to={`user/${cell.row.original.id}/edit`} className="mr-8">
                <Button
                  icon={AdminImages.EditIcon}
                  height="27px"
                  padding="2px 5px"
                />
              </Link>
            ) : (
              <Link
                style={{ opacity: ".7", pointerEvents: "none" }}
                className="mr-8"
              >
                <Button
                  icon={AdminImages.EditIcon}
                  height="27px"
                  padding="2px 5px"
                />
              </Link>
            )}
            <div>
              <Button
                onClick={() => handleDelete(cell.row.original.id)}
                icon={AdminImages.TrashIcon}
                height="27px"
                padding="2px 5px"
                backgroundColor="#EB6D73"
              />
            </div>
          </div>
        );

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
      initialState: { pageIndex: 0, pageSize: 15 },
    },
    usePagination
  );

  return (
    <div>
      <Loader loading={loading} />
      <div className={"webmaster_table " + style.table_td}>
        <div className={loading ? "table_wrapper" : ""}>
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
                    style={{ backgroundColor: "#E0E3F3" }}
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

export default UTable;
