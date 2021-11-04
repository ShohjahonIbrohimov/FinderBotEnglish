import React, { useEffect, useState } from "react";
import { useTable, usePagination, useRowSelect } from "react-table";
import "./Table.css";
import { webmaster_icons } from "../../../../constants/icons";
import { tableData } from "../items";
import { call_center_icons } from "../../../../constants/icons";
import SelectClassic from "../../../Reusable/SelectClassic";
import { useForm } from "react-hook-form";
import UniversalButton from "../../../Reusable/UniversalButton";
import RSelect from "../../../Reusable/Select";
import styles from "../styles/CustomCheckbox.module.css";

const field = [
  {
    label: "Направления",
    name: "news",
    options: [
      {
        value: "1",
        label: "Еще действия",
      },
      {
        value: "2",
        label: "Ремонт бытовой техники",
      },
      {
        value: "3",
        label: "Обслуживание интернет-сетей",
      },
      {
        value: "4",
        label: "Мастер на все руки",
      },
      {
        value: "5",
        label: "Ремонт Помишения",
      },
      {
        value: "6",
        label: "Клингинг",
      },
    ],
  },
];

export default function FinanceTable({ finance_data, handleDelete }) {
  const data = React.useMemo(() => tableData, [tableData]);
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const columns = React.useMemo(
    () => [
      // {
      //     Header: <div className="tableHeaderCheckbox">
      //         <div className={" clients_checkbox"}>
      //             <label className="container">
      //                 <input type="checkbox" />
      //                 <span className="checkmark"></span>
      //             </label>
      //         </div>
      //     </div>,
      //     accessor: "checkbox"
      // },
      {
        Header: "",
        accessor: "icon",
      },
      {
        Header: (
          <>
            <span>Name/компания</span>
            <img
              className="long_arrow_up"
              src={call_center_icons.long_arrow_up}
              alt=""
            />
          </>
        ),
        accessor: "name",
      },
      {
        Header: (
          <>
            <span>Электронная Email</span>
            <img
              className="table_arrow_right"
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </>
        ),
        accessor: "login",
      },
      {
        Header: (
          <>
            <span>Telephone</span>
            <img
              className="table_arrow_right"
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </>
        ),
        accessor: "phone",
      },
      {
        Header: (
          <>
            <span>Адрес</span>
            <img
              className="table_arrow_right"
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </>
        ),
        accessor: "adress",
      },
      {
        Header: (
          <>
            <span>Рекламная компания</span>
            <img
              className="table_arrow_right"
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </>
        ),
        accessor: "reklama",
      },
      {
        Header: (
          <>
            <span>Примичание</span>
            <img
              className="table_arrow_right"
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </>
        ),
        accessor: "note",
      },
      {
        Header: (
          <>
            <span>Баланс, руб</span>
            <img
              className="table_arrow_right"
              src={call_center_icons.up_down_arrow_icon}
              alt=""
            />
          </>
        ),
        accessor: "price",
      },
    ],
    []
  );
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <div className={styles.idDiv}>
            <div className={styles.labelDiv}>
              <label className={styles.container}>
                <input type="checkbox" ref={resolvedRef} {...rest} />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>
        </>
      );
    }
  );

  const getCustomContent = (cell) => {
    switch (cell.column.id) {
      case "icon":
        return <img className="tableIcon" src={cell.row?.original?.icon} />;
      case "checkbox":
        return (
          <div className="clientsTableCheckbox">
            <div className={" clients_checkbox"}>
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        );
      // case "id":
      //     return <span>{cell.row?.original?.id ? '' : Math.floor(Math.random() * 50)}</span>

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
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <div className="webmaster_table my_client_table">
      <div className="table_wrapper">
        <table
          {...getTableProps()}
          style={{ borderSpacing: "0", width: "100%" }}
        >
          <thead className="client_thead">
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
      <div className="actions_row">
        <div className="sub_actions_row1">
          {field.map((f, i) => {
            return (
              <div key={i}>
                <RSelect
                  control={control}
                  width="180px"
                  register={register}
                  options={f.options}
                  name={f.name}
                />
                {/* <SelectClassic width="180px" register={register} options={f.options} name={f.name} /> */}
              </div>
            );
          })}
          <span
            style={{
              marginLeft: "2rem",
              fontWeight: "500",
              display: "flex",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            Выбрано — 1
          </span>
        </div>
        <div className="sub_actions_row2">
          <UniversalButton
            backgroundColor="#E87676"
            icon={call_center_icons.mini_basket_icon}
            padding="5px"
            height="26px"
          />
        </div>
      </div>
      <div className="actions_row2">
        <span>Всего —1</span>
      </div>
      <div className="webmaster_pagination">
        <button
          className={
            !canPreviousPage
              ? "mr-16 pagination_btn1_disabled"
              : "mr-16 pagination_btn1"
          }
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <img
            className="webm_arrow_left"
            src={webmaster_icons.pagination_arrow_left}
            alt=""
          />
        </button>
        {pageOptions.map((item) => {
          return (
            <button
              className={item == pageIndex ? "btn_disabled" : "btn_page"}
              disabled={item == pageIndex}
              onClick={(e) => {
                const page = e.target.innerText
                  ? Number(e.target.innerText) - 1
                  : 0;
                gotoPage(page);
                console.log(e.target.innerText);
              }}
            >
              {item + 1}
            </button>
          );
        })}
        <i className="dot3">&nbsp; . . . &nbsp;</i>
        <button
          className={
            pageOptions.length == pageIndex ? "btn_disabled" : "btn_page end"
          }
          disabled={pageOptions.length == pageIndex}
          onClick={(e) => {
            const page = e.target.innerText
              ? Number(e.target.innerText) - 1
              : 0;
            gotoPage(page);
          }}
        >
          {pageOptions.length}
        </button>
        {/* <span className="mr-16 pageIndex">{pageIndex + 1}</span> */}
        {/* <span className="mr-16 pageIndex">{pageOptions.length}</span> */}
        <button
          className={
            !canNextPage
              ? "mr-16 pagination_btn1_disabled"
              : "mr-16 pagination_btn2"
          }
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <img
            className="webm_arrow_right"
            src={webmaster_icons.pagination_arrow_right}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
