import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import { getPodCategories } from "../../../api/calls/pod_category";
import { getSaleAccountsEN } from "../../../api/calls/sale";
import FileInput from "../../Reusable/FileInput";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { getStates } from "../../../api/calls/states";
import { getShowcases } from "../../../api/calls/showcase";
import { useTranslation } from "react-i18next";

const options = [
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Tiktok",
    value: "Tiktok",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
  {
    label: "YouTube",
    value: "YouTube",
  },
];

const inputHiddenStyle = {
  height: "0px",
  padding: "0px",
  margin: "0px",
  border: "none",
};

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);
  const [podcategories, setpodcategories] = useState([]);
  const [states, setStates] = useState([]);
  const [showcases, setShowcases] = useState([]);
  const [sales, setsales] = useState([]);
  const { t } = useTranslation();
  const [image, setImage] = useState(null);

  const cat_id = watch("category_id");
  const stat_id = watch("states_id");
  const showcase_id = watch("showcase_id");
  const name = watch("name");

  useEffect(() => {
    setValue("image", image);
    setValue("name", name?.trim());
    setValue(
      "states_name",
      states.filter((state) => state._id === stat_id)[0]?.name
    );
    setValue(
      "showcase_name",
      showcases.filter((showcase) => showcase._id === showcase_id)[0]?.name
    );
    setValue(
      "states_showcase_name",
      showcases.filter((showcase) => showcase._id === showcase_id)[0]
        ?.category_name
    );
  }, [stat_id, image, name, showcase_id]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
    getPodCategories().then((res) => setpodcategories(res.data.data));
    getStates().then((res) => setStates(res.data.data));
    getShowcases().then((res) => setShowcases(res.data.data));
    getSaleAccountsEN().then((res) => setsales(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>{t("name")}:</label>
      <br />
      <input name="name" ref={register({ required: true })} />
      <label>{t("category")}:</label>
      <br />
      <select name="category_id" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <label>{t("type")}:</label>
      <br />
      <select name="type_name" ref={register({ required: true })}>
        {options.map((c) => (
          <option value={c.value}>{c.label}</option>
        ))}
      </select>
      <br />
      <label>{t("pod-cat")}:</label>
      <br />
      <select name="category_name" ref={register({ required: true })}>
        {podcategories.map((c) => (
          <option value={c.name}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>{t("geo")}:</label>
      <br />
      <select name="states_id" ref={register({ required: true })}>
        {states.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>{t("showcase")}:</label>
      <br />
      <select name="showcase_id" ref={register({ required: true })}>
        {showcases.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>{t("account")}:</label>
      <br />
      <select name="file" ref={register({ required: true })}>
        {sales.map((c) => (
          <option value={c._id}>
            {c.firstName} + {c.type_os}
          </option>
        ))}
      </select>
      <br />
      <label>{t("price")}:</label>
      <br />
      <input name="price" ref={register({ required: true })} />
      <label>{t("image")}:</label>
      <input
        style={{ height: "0px", padding: "0px", margin: "0px", border: "none" }}
        name="image"
        ref={register({ required: true })}
      />
      <FileInput setValue={setImage} register={register} />
      <br />
      <label>{t("description")}:</label>
      <br />
      <textarea
        rows="6"
        name="description"
        ref={register({ required: true })}
      />
      <LoaderBtn loading={loading} title={t("add")} />
      <input
        style={inputHiddenStyle}
        name="states_name"
        ref={register({ required: true })}
      />
      <input
        style={inputHiddenStyle}
        name="showcase_name"
        ref={register({ required: true })}
      />
      <input
        style={inputHiddenStyle}
        name="states_showcase_name"
        ref={register({ required: true })}
      />
    </form>
  );
};

export default ProductsForm;
