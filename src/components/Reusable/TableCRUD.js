import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import Table from "./Table";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

function TableCRUD({
  addBtn = true,
  getTableData,
  createTableData,
  handleDelete,
  headerCols,
  bodyCols,
  Form,
  title,
  modalWidth,
  handleDownload,
  overflow = "auto",
  payusers,
  handleUpdatePay,
}) {
  const [open, setopen] = useState(false);
  const [tableData, settableData] = useState([]);
  const [loading, setloading] = useState(false);
  const [tloading, settloading] = useState(false);
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const { t } = useTranslation();
  const handleGetTableData = () => {
    settloading(true);
    getTableData().then((res) => {
      settloading(false);
      settableData(res.data.data);
    });
  };

  const handleModalOpen = () => {
    setopen(true);
  };

  const onSubmit = (data) => {
    setloading(true);
    createTableData(data)
      .then((res) => {
        setopen(false);
        handleGetTableData();
        setloading(false);
        reset();
        toast.success("Успех");
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.message);
      });
  };

  const deleteTableData = (id) => {
    setloading(true);
    handleDelete(id)
      .then(() => {
        handleGetTableData();
        setloading(false);
        reset();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetTableData();
  }, []);

  return (
    <div class="w3-container">
      <div class="container">
        <div class="page-header">
          <h2 class="page-header__title">{title}</h2>
          {addBtn && (
            <button id="myBtn" class="app-button" onClick={handleModalOpen}>
              {t("add")}
            </button>
          )}
        </div>

        <div style={{ minHeight: "40vh" }}>
          <Loader light={false} loading={tloading} />
          <div style={{ overflow }}>
            <Table
              tableData={tableData}
              headerCols={headerCols}
              bodyCols={bodyCols}
              handleDelete={deleteTableData}
              handleDownload={handleDownload}
              payusers={payusers}
              handleUpdatePay={handleUpdatePay}
            />
          </div>
        </div>

        <div id="myModal" class="modal" style={open ? { display: "flex" } : {}}>
          <div
            class="modal-content"
            style={modalWidth ? { width: modalWidth } : {}}
          >
            <div class="modal-header">
              <span class="close" onClick={() => setopen(false)}>
                &times;
              </span>
              <h3>{title}</h3>
            </div>
            {open && (
              <div class="modal-body">
                {Form && (
                  <Form
                    loading={loading}
                    register={register}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    watch={watch}
                    setValue={setValue}
                    reset={reset}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCRUD;
