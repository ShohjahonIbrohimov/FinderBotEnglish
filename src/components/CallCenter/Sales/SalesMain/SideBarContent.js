import React, { useState } from "react";
import InputText from "../../../Reusable/InputText";
import { useForm } from "react-hook-form";
import RSelect from "../../../Reusable/Select";
import { useTable } from "react-table";
import { tableData, selectGroup } from "./items";
import styles from "./SideBarContent.module.css";
import TextArea from "../../../Reusable/TextArea";
import Button from "../../../Reusable/Button";

function SideBarContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const data = React.useMemo(() => tableData, [tableData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Наименование",
        accessor: "naming",
      },
      {
        Header: "Кол-во",
        accessor: "quantity",
      },
      {
        Header: "Price, руб",
        accessor: "price",
      },
      {
        Header: "Сумма, руб",
        accessor: "sum",
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
      <h3>Продажа</h3>
      <div className="mt-32">
        <InputText
          register={register}
          name="client"
          errors={errors}
          label="Клиент"
          placeholder=""
          width="100%"
        />

        <div className="d-flex justify-between mb-32 column-gap-20">
          {selectGroup.map((f, i) => {
            return (
              <div key={i} className="w-100">
                <label className="mb-16" htmlFor="">
                  {f.label}
                </label>
                <RSelect
                  control={control}
                  width="100%"
                  register={register}
                  options={f.options}
                  name={f.name}
                />
              </div>
            );
          })}
        </div>
        <div>
          <InputText
            register={register}
            name="services_name"
            errors={errors}
            label="Наименование работы, услуги или товара"
            placeholder=""
            width="100%"
          />
        </div>
      </div>

      <div className="">
        <table
          {...getTableProps()}
          className=""
          style={{ borderSpacing: "0", width: "100%" }}
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
                    backgroundColor: "#F5F5F5",
                    height: "30px",
                    borderRadius: "5px",
                    marginBottom: "4px",
                    outline: "2.5px solid #fff",
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

      <div className={styles.prices}>
        <div className={styles.prices_item}>
          <h5>Итого скидка:</h5>
          <span>0 руб</span>
        </div>
        <div className={styles.prices_item}>
          <h5>Расчетная прибыль:</h5>
          <span>0 руб</span>
        </div>
        <div className={styles.prices_item}>
          <h5>Итого сумма:</h5>
          <span>0 руб</span>
        </div>
      </div>

      <div className="mt-64">
        <label>Description</label>
        <TextArea
          errors={errors}
          width="100%"
          register={register}
          name="news-text"
          placeholder=""
        />
      </div>

      <div
        className="mt-32 mb-32 w-100"
        style={{ height: "1px", backgroundColor: "#B3B7D4" }}
      ></div>
      <button className="btn-main btn-main--dark mr-8">Продать</button>
    </div>
  );
}

export default SideBarContent;
