import React, { useEffect, useState } from "react";
import { getPodCategories } from "../../../api/calls/pod_category";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getCategories } from "../../../api/calls/category";

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
  change,
}) => {
  const [podcategories, setpodcategories] = useState([]);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getPodCategories().then((res) => setpodcategories(res.data.data));
    getCategories().then((res) => setcategories(res.data.data));
  }, [change]);

  const cat_id = watch("category_id");

  useEffect(() => {
    setValue(
      "category_name",
      podcategories.filter((c) => c._id === cat_id)[0]?.name
    );
  }, [cat_id]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-inputs-wrap" style={{ height: "auto" }}>
        {/* <label>Сумма:</label>
        <br />
        <input name="usd" ref={register({ required: true })} />
        <br />
        <label>Telephone:</label>
        <br />
        <input name="phone" ref={register({ required: true })} />
        <br />
        <label>Телеграм ID:</label>
        <br />
        <input name="telegram_id" ref={register({ required: true })} />
        <br /> */}
        <label>Токен:</label>
        <br />
        <input name="token" ref={register({ required: true })} />
        <br />
        <br />
      </div>
      <LoaderBtn loading={loading} title="Add" />
    </form>
  );
};

export default ProductsForm;
