import React, { useState } from "react";
import Button from "../../Reusable/Button";
import RSelect from "../../Reusable/Select";
import Rangepicker from "../../Reusable/Rangepicker";
import { useTable } from "react-table";
import { useForm } from "react-hook-form";
import { tableData, selectGroup } from "./items";
import { AdminImages } from "../../../constants/icons";
import SideBar from "../../Reusable/SideBar";
import AppealSideBar from "./AppealSideBar";

function AppealsLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const data = React.useMemo(() => tableData, [tableData]);
  const [open, setOpen] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: "обращение",
        accessor: "appeal",
      },
      {
        Header: "локатцию",
        accessor: "loctation",
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
        Header: "Крайний срок",
        accessor: "status_end",
      },
      {
        Header: "Cоздан",
        accessor: "created_at",
      },
      {
        Header: "Менеджер",
        accessor: "manager",
      },
      {
        Header: "Клиент",
        accessor: "client",
      },
      {
        Header: "Рекламная компания ",
        accessor: "ad_firm",
      },
      {
        Header: "Комментарий",
        accessor: "comments",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <SideBar open={open} setOpen={setOpen}>
        <AppealSideBar open={open} setOpen={setOpen} />
      </SideBar>
      <div>
        <div className="d-flex justify-between mb-64 align-end">
          <div>
            <button
              onClick={handleOpen}
              className="btn-main btn-main--green mr-8"
            >
              +Обращение
            </button>
          </div>
          {selectGroup.map((f, i) => {
            return (
              <div key={i} className="" style={{ width: "auto" }}>
                <RSelect
                  label={f.label}
                  control={control}
                  width="180px"
                  register={register}
                  options={f.options}
                  name={f.name}
                />
              </div>
            );
          })}
          <div className="d-flex flex-column">
            <Rangepicker height="42px" label="Создано" />
          </div>
        </div>
      </div>

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

export default AppealsLayout;
