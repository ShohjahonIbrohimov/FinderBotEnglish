import React from "react";
import LoaderBtn from "../../../Reusable/LoaderBtn";
import { useTranslation } from "react-i18next";

const MenuForm = ({ handleSubmit, onSubmit, register, loading }) => {
  const { t } = useTranslation();

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-inputs-wrap">
        <label>{t("name-menu")}:</label>
        <br />
        <textarea
          rows="8"
          type="tgaccount"
          name="description"
          ref={register({ required: true })}
        />
        <br />
      </div>
      <LoaderBtn loading={loading} title={t("add")} />
    </form>
  );
};

export default MenuForm;
