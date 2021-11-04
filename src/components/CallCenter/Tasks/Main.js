import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Radio from "../../Reusable/Radio";
import SideBar from "../../Reusable/SideBar";
import NewTaskForm from "./NewTaskForm";

const options = [
  {
    label: "В работе",
    value: "at_work",
    id: "at_work",
  },
  {
    label: "Выполненные",
    value: "completed",
    id: "completed",
  },
];

const Main = () => {
  const { register, errors, control, handleSubmit, watch, reset } = useForm();
  const [open, setopen] = useState(false);

  return (
    <div>
      <div className="mb-32">
        <span className="page_section_title">Задачи</span>
        <Radio
          name="type"
          options={options}
          register={register}
          errors={errors}
        />
      </div>
      <hr className="hr" />

      <div className="mt-24">
        <button
          onClick={() => setopen(true)}
          className="btn-main btn-main--green mr-8"
        >
          + Новая задача
        </button>
        <button className="btn-main btn-main--dark mr-8">Я автор</button>
        <button className="btn-main">Все задачи</button>
      </div>
      <SideBar width={"400px"} open={open} setOpen={setopen}>
        <NewTaskForm setopen={setopen} />
      </SideBar>
    </div>
  );
};

export default Main;
