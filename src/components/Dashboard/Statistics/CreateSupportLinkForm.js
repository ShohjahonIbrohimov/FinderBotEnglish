import React, { useEffect, useState } from "react";
import LoaderBtn from "../../Reusable/LoaderBtn";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ProductsForm = ({}) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios({
      url: "https://api.g-obox.ru/offers/payment/all/users",
      method: "GET",
    }).then((res) => setusers(res.data.data));
  }, []);

  const onSubmit = (data) => {
    setloading(true);
    axios({
      url: "https://api.g-obox.ru/offers/support/link/update ",
      method: "POST",
      data,
    })
      .then((res) => {
        setloading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-inputs-wrap" style={{ height: "auto" }}>
        <select name="username" ref={register({ required: true })}>
          {users.map((o) => (
            <option value={o.username}>{o.username}</option>
          ))}
        </select>
        <label>{t("link")}:</label>
        <br />
        <input name="link" ref={register({ required: true })} />
        <br />
        <br />
      </div>
      <LoaderBtn loading={loading} title="Add" />
    </form>
  );
};

export default ProductsForm;
