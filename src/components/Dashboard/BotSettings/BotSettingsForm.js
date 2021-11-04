import React, { useState } from "react";
import { checkToken } from "../../../api/calls/bot-settings";
import LoaderBtn from "../../Reusable/LoaderBtn";
import { useTranslation } from "react-i18next";

const CreateProductForm = ({
  onSubmit,
  loading,
  handleSubmit,
  register,
  setValue,
  reset,
}) => {
  const [loading2, setloading2] = useState(false);
  const [checked, setchecked] = useState(false);
  const [botData, setbotData] = useState({});
  const [error, seterror] = useState(null);
  const { t } = useTranslation();

  const onSubmit2 = (data) => {
    setloading2(true);
    if (!checked) {
      checkToken(data.token)
        .then((res) => {
          setchecked(true);
          setbotData({
            first_name: res.data.result.first_name,
            username: res.data.result.username,
          });
          setValue("first_name", res.data.result.first_name);
          setValue("username", `@${res.data.result.username}`);
          setloading2(false);
        })
        .catch((res) => {
          seterror(res.message);
          setloading2(false);
        });
    } else {
      setloading2(false);
      setchecked(false);
      onSubmit({ ...data, ...botData });
    }
  };

  const handleReset = () => {
    reset({});
    seterror(null);
    setchecked(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit2)} class="support-form">
      <label>{t("token")}:</label>
      <br />
      <input name="token" ref={register({ required: true })} />
      <br />
      <label>{t("user-name")}:</label>
      <input disabled name="username" ref={register({ required: false })} />
      <br />
      {error && (
        <span style={{ color: "#E54E4E" }}>
          {error} <br /> <br />
        </span>
      )}
      <div style={{ display: "flex" }}>
        <div>
          <LoaderBtn
            loading={checked ? loading : loading2}
            title={checked ? t("create-bot") : t("send")}
          />
        </div>
        <div style={{ marginLeft: "0.5rem" }} onClick={handleReset}>
          <LoaderBtn
            type="button"
            disabled={false}
            background="#E54E4E"
            loading={false}
            title={t("cancel")}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateProductForm;
