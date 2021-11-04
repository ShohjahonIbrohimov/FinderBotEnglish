import React, { useEffect, useState } from "react";
import { getPodCategories } from "../../../api/calls/pod_category";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getCategories } from "../../../api/calls/category";
import { createState, getStates, deleteState } from "../../../api/calls/states";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  useEffect(() => {
    getStates().then((res) => setpodcategories(res.data.data));
    getCategories().then((res) => setcategories(res.data.data));
  }, [change]);

  const cat_id = watch("category_id");
  const name = watch("name");

  useEffect(() => {
    setValue(
      "category_name",
      podcategories.filter((c) => c._id === cat_id)[0]?.name?.trim()
    );
    setValue("name", name?.trim());
  }, [cat_id, name]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-inputs-wrap">
        <label>{t("showcase")}:</label>
        <br />
        <input name="name" ref={register({ required: true })} />
        <br />
        <label>
          {t("name")} {t("geo")}:
        </label>
        <br />
        <select name="category_id" ref={register({ required: true })}>
          <option value="">{t("select-geo")}</option>
          {podcategories.map((c) => (
            <option value={c._id}>{c.name}</option>
          ))}
        </select>
        <br />
        <input
          style={{
            height: "0px",
            margin: "0px",
            padding: "0px",
            overflow: "hidden",
            border: "none",
          }}
          name="category_name"
          ref={register({ required: true })}
        />
      </div>
      <LoaderBtn loading={loading} title={t("add")} />
    </form>
  );
};

export default ProductsForm;
