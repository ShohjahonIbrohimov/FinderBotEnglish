import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import LoaderBtn from "../../Reusable/LoaderBtn";

const ProductsForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="support-form">
      <label>Name:</label>
      <br />
      <input name="name" ref={register({ required: true })} />
      <br />
      <label>Категория:</label>
      <br />
      <select name="category_id" ref={register({ required: true })}>
        {categories.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <LoaderBtn loading={loading} title="Add" />
    </form>
  );
};

export default ProductsForm;
