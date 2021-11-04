import React, { useState, useEffect } from "react";
import { AdminImages } from "../../../../constants/icons";

import style from "./Master.module.css";
import { useForm } from "react-hook-form";
import InputText from "../../../Reusable/InputText";
import RSelect from "../../../Reusable/Select";
import { useParams } from "react-router-dom";
import { tableData as users } from "../items";
import { getManagers } from "../../../../api/api_calls";
import toast from "react-hot-toast";

const getmasters = (managers) => {
  return [
    {
      label: "Првязка менджеру",
      name: "manager",
      options: managers,
    },
    {
      label: "Cтатус",
      name: "status",
      options: [
        {
          value: "0",
          label: "Активен",
        },
        {
          value: "1",
          label: "Блокирован",
        },
        {
          value: "2",
          label: "Ожидание",
        },
      ],
    },
  ];
};

function Master() {
  const [userSelected, setUserSelected] = useState([]);
  const [managers, setManagers] = useState([]);
  const [newUser, setNewUser] = useState([]);
  const [generate, setGenerate] = useState();
  const [generateId, setGenerateId] = useState();

  useEffect(() => {
    getManagers().then((res) => setManagers(res.data));
    setUserSelected(users);
  }, []);

  let { id } = useParams();

  const user = userSelected.find((i) => i.id.toString() === id?.toString());

  useEffect(() => {
    setGenerateId(Math.random().toString(10).slice(12));
  }, [newUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => {
    setNewUser(data);
    console.log(data);
  };

  const generatePassword = () => {
    setGenerate(Math.random().toString(36).slice(2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className="page_section_title">Личный даный вебмастера </span>

      <div className={`${style.master_user} d-flex align-center`}>
        <div className={`${style.master_user_img} mr-16`}>
          <img src={AdminImages.MasterUser} alt="master-img" />
        </div>
        <div className={style.master_user_info}>
          <h4>{user?.name ? user.name : newUser.name}</h4>
          <div className={`d-flex justify-between`}>
            <span className="mr-16">ID: {user?.id ? user.id : newUser.id}</span>
            <span className="success">
              {user?.status ? user.status : newUser.status}
            </span>
          </div>
        </div>
      </div>

      <div className={`${style.select_group} d-flex mt-32`}>
        <div className="mr-32 mt-16">
          <button type="submit" className="btn-main btn-main--dark">
            Отправить Login и пароли
          </button>
        </div>

        <div className="d-flex justify-between">
          {getmasters(managers).map((f, i) => {
            return (
              <div className="mr-32" key={i}>
                <RSelect
                  control={control}
                  width="200px"
                  register={register}
                  options={f.options}
                  name={f.name}
                  placeholder={f.label}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        {id ? (
          ""
        ) : (
          <input
            style={{ display: "none" }}
            name="id"
            ref={register}
            value={generateId}
          />
        )}
        <InputText
          register={register}
          name="email"
          errors={errors}
          label="Login"
          placeholder="ivanov.aleksey@gmail.com"
          width="314px"
          defaultValue={user?.email ? user.email : newUser.email}
        />

        <InputText
          register={register}
          name="name"
          errors={errors}
          label="Name"
          placeholder="ivanov aleksey"
          width="314px"
          defaultValue={user?.name ? user.name : newUser.name}
        />

        <InputText
          register={register}
          name="parol"
          errors={errors}
          label="Password"
          placeholder="112233"
          width="314px"
        />
        <InputText
          register={register}
          name="wallet"
          errors={errors}
          label="Кошелек"
          placeholder="Visa: 4270 0013 0014 3664"
          width="314px"
        />
        <div className="d-flex align-center mt-32 mb-16">
          <label style={{ width: "314px" }}>
            <span className="label_title">Password</span>
            <div className="input_primary_wrapper">
              <input
                className="primary"
                name="gerated-password"
                ref={register}
                placeholder="31Ф6316466"
                defaultValue={generate}
              />
            </div>
            {errors["gerated-password"] && (
              <span className="input_error">Обязательно поле</span>
            )}
            {generate ? <span className="success">Password готово!</span> : ""}
          </label>
          <div className={`${generate ? "mb-16" : ""} ml-32 mt-16`}>
            <div onClick={generatePassword} className="btn-main btn-main--dark">
              Генирировать Password
            </div>
          </div>
        </div>
        <InputText
          register={register}
          name="ss"
          errors={errors}
          label="Прсвязоваен"
          placeholder="Роман Сергеев"
          width="314px"
        />
      </div>
    </form>
  );
}

export default Master;
