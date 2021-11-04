import React from "react";
import { useForm } from "react-hook-form";
import InputText from "../../Reusable/InputText";
import TextArea from "../../Reusable/TextArea";
import RSelect from "../../Reusable/Select";
import { fields } from "./form_settings";
import Rangepicker from "../../Reusable/Rangepicker";

const NewTaskForm = ({ setopen }) => {
  const { register, errors, control, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <span className="sidebar_title">Новая задача</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText {...fields.task_name} register={register} errors={errors} />
        <TextArea {...fields.description} register={register} errors={errors} />
        <div className="mb-32">
          <RSelect
            {...fields.executer}
            control={control}
            register={register}
            errors={errors}
          />
        </div>
        <Rangepicker label="Срок выполнения" width={"100%"} />
        <div className="d-flex mt-64">
          <button className="btn-main btn-main--dark mr-8">Cохранить</button>
          <button
            onClick={() => setopen(false)}
            className="btn-main btn-main--white"
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
