import React, { useState, useEffect } from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getCategories } from "../../../api/calls/category";
import { useTranslation } from "react-i18next";

const MenuFormPodcategory = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
  change,
}) => {
  const [categories, setcategories] = useState([]);
  const cat_id = watch("category_id");
  const name = watch("name");
  const { t } = useTranslation();

  useEffect(() => {
    setValue(
      "category_name",
      categories.filter((c) => c._id === cat_id)[0]?.name?.trim()
    );
    setValue("name", name?.trim());
  }, [cat_id, name]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
  }, [change]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-inputs-wrap">
        <label>{t("pod-cat")}:</label>
        <br />
        <input name="name" ref={register({ required: true })} />
        <label>{t("category")}:</label>
        <br />
        <select name="category_id" ref={register({ required: true })}>
          <option value="">{t("select-cat")}</option>
          {categories.map((c) => (
            <option value={c._id}>{c.name}</option>
          ))}
        </select>

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

export default MenuFormPodcategory;
