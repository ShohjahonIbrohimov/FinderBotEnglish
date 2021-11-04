import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/calls/category";
import { getStates } from "../../../api/calls/states";
import FileInput from "../../Reusable/FileInput";
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
  const [states, setStates] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setValue("image", image);
  }, [image]);

  useEffect(() => {
    getCategories().then((res) => setcategories(res.data.data));
    getStates().then((res) => setStates(res.data.data));
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
      <label>State ID:</label>
      <br />
      <select name="states_id" ref={register({ required: true })}>
        {states.map((c) => (
          <option value={c._id}>{c.name}</option>
        ))}
      </select>
      <br />
      <label>Price:</label>
      <br />
      <input name="price" ref={register({ required: true })} />
      <label>Description:</label>
      <br />
      <textarea
        rows="6"
        name="description"
        ref={register({ required: true })}
      />
      <FileInput setValue={setImage} register={register} />
      <LoaderBtn loading={loading} title="Add" />
      <input
        style={{ height: "0px", padding: "0px", margin: "0px", border: "none" }}
        name="image"
        ref={register({ required: true })}
      />
    </form>
  );
};

export default ProductsForm;
