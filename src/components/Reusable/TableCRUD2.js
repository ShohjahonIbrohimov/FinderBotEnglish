import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import Table from "./Table";
import toast from "react-hot-toast";

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
  handleChange = () => {},
  change = false,
}) {
  const [open, setopen] = useState(false);
  const [tableData, settableData] = useState([]);
  const [loading, setloading] = useState(false);
  const [tloading, settloading] = useState(false);
  const { register, handleSubmit, reset, watch, setValue } = useForm();

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
        handleChange();
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
        handleChange();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetTableData();
  }, []);

  return (
    <div class="w3-container">
      <div class="container">
        <div>
          {Form && (
            <Form
              loading={loading}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              watch={watch}
              setValue={setValue}
              reset={reset}
              change={change}
            />
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCRUD;
