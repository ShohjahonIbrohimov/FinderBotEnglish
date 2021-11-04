import React from "react";
import { useForm } from "react-hook-form";
import InputText from "../../Reusable/InputText";
import Rangepicker from "../../Reusable/Rangepicker";
import RSelect from "../../Reusable/Select";
import TextArea from "../../Reusable/TextArea";

const statusSelect = [
  {
    label: "Cтатус",
    name: "status",
    options: [
      {
        value: "1",
        label: "Активен",
      },
      {
        value: "2",
        label: "Блокирован",
      },
      {
        value: "3",
        label: "Ожидание",
      },
    ],
  },
];

function AppealSideBar({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  return (
    <div>
      <h3>Новая заявка </h3>

      <div className="d-flex justify-between align-center mt-32">
        <InputText
          register={register}
          name="creative_banner"
          errors={errors}
          label="id отправителя лида"
          placeholder=""
          width="320px"
        />

        <div className="ml-16">
          <label htmlFor="" className="d-flex flex-column">
            <span className="label_title">Дата и время создаия заказа</span>

            <Rangepicker height="38px" />
          </label>
        </div>
      </div>

      <div className="d-flex justify-between align-center mt-32">
        <InputText
          register={register}
          name="client_name"
          errors={errors}
          label="Name клента"
          placeholder=""
          width="320px"
        />

        {statusSelect.map((f, i) => {
          return (
            <div className="mb-24 ml-16" key={i}>
              <RSelect
                control={control}
                width="200px"
                register={register}
                options={f.options}
                name={f.name}
                label={f.label}
              />
            </div>
          );
        })}
      </div>

      <div>
        <InputText
          register={register}
          name="client_phone"
          errors={errors}
          label="Телфон номер"
          placeholder=""
          width="320px"
        />

        <InputText
          register={register}
          name="client_email"
          errors={errors}
          label="Email"
          placeholder=""
          width="320px"
        />

        <InputText
          register={register}
          name="Направления"
          errors={errors}
          label="client_direction"
          placeholder=""
          width="320px"
        />

        <div className="mt-32 mb-32">
          <label>Проблема</label>
          <TextArea
            errors={errors}
            width="100%"
            register={register}
            name="client_problem"
            placeholder=""
          />
        </div>
        <InputText
          register={register}
          name="client_phone"
          errors={errors}
          label="Стартавая Price"
          placeholder=""
          width="320px"
        />

        <InputText
          register={register}
          name="client_email"
          errors={errors}
          label="Регион"
          placeholder=""
          width="320px"
        />

        <InputText
          register={register}
          name="Адрес"
          errors={errors}
          label="client_direction"
          placeholder=""
          width="320px"
        />

        <InputText
          register={register}
          name="Дата и время выезда"
          errors={errors}
          label="client_direction"
          placeholder=""
          width="320px"
        />

        <div className="mt-32 mb-32">
          <label>Коментраия</label>
          <TextArea
            errors={errors}
            width="100%"
            register={register}
            name="client_comment"
            placeholder=""
          />
        </div>

        <InputText
          register={register}
          name="client_notif"
          errors={errors}
          label="Уведомления"
          placeholder=""
          width="320px"
        />

        <InputText
          register={register}
          name="client_direction"
          errors={errors}
          label="Отвесный"
          placeholder=""
          width="320px"
        />
      </div>

      <div
        className="mt-32 mb-32 w-100"
        style={{ height: "1px", backgroundColor: "#B3B7D4" }}
      ></div>

      <div className="d-flex">
        <button className="btn-main btn-main--dark mr-8">Cохранить</button>
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="btn-main mr-8"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default AppealSideBar;
