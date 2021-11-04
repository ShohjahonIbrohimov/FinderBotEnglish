import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoaderBtn from "../../Reusable/LoaderBtn";

const MenuForm = ({
  handleSubmit,
  onSubmit,
  register,
  loading,
  watch,
  setValue,
}) => {
  const name = watch("name");
  const { t } = useTranslation();

  useEffect(() => {
    setValue("name", name?.trim());
  }, [name]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-inputs-wrap">
        <label>{t("name-menu")}:</label>
        <br />
        <input name="name" ref={register({ required: true })} />
        <br />
      </div>
      <LoaderBtn loading={loading} title={t("add")} />
    </form>
  );
};

export default MenuForm;
