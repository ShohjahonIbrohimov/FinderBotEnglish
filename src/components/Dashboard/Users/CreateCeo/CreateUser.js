import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import InputText from "../../../Reusable/InputText";
import SelectClassic from "../../../Reusable/SelectClassic";
import { AdminImages } from "../../../../constants/icons";
import style from "./CreateUser.module.css";
import { useParams } from "react-router-dom";
import RSelect from "../../../Reusable/Select";
import FileInput from "../../../Reusable/FileInput";
import Button from "../../../Reusable/Button";
import { signup } from "../../../../redux/auth/thunks";
import DPicker from "../../../Reusable/DataPicker";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { get_users_all } from "../../../../redux/users/thunks";
import { userSelect } from "./items";

function CreateUser() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [date1, setdate1] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  let { id } = useParams();

  const userSelected = useSelector((state) => state.usersReducer.users);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const afterError = (err) => {
    toast.error("Ощибка при отправке");
    console.log(err);
  };

  const afterSuccess = () => {
    dispatch(get_users_all());
    history.push("/users");
    return <b>Готово</b>;
  };

  console.log(file);
  const handleCreate = (data) => {
    let birthday = date1.day + "-" + date1.month + "-" + date1.year;
    console.log(birthday);
    let userData = {
      confirm_password: data.confirm_password,
      email: data.email,
      name: data.name,
      image: file,
      birthday: birthday,
      password: data.password,
      phone: data.phone,
      role: +data.role?.value,
      social: data.social,
      status: +data.status?.value,
    };
    console.log(data);
    console.log(userData);

    if (id === undefined && data.password === data.confirm_password) {
      toast.promise(dispatch(signup(userData)), {
        duration: 3000,
        loading: "Процесс создания...",
        success: () => afterSuccess(),
        error: (err) => afterError(err),
      });
    } else {
      toast.error("Password и Password подтверждения не совпадают");
    }
  };

  const handleCancel = () => {
    history.push("/users");
  };

  let user = userSelected.find((i) => i.id.toString() === id?.toString());

  const handleShow = () => {
    setShow(!show);
  };

  console.log(file);

  const inputFile = useRef(null);

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const onEdit = () => {
    inputFile.current.click();
  };

  const onDelete = () => {
    setFile("");
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <span className="page_section_title">Добавления CEO</span>
      <div>
        <div className="mb-32">
          <div className="d-flex align-center">
            <div className="file-content">
              <label>
                <h5 className="file-label">Профиль фото</h5>
                <div className="file-input-area">
                  <div className="file-input-body" ref={inputFile}>
                    <div className="file-input-text">
                      <span className="file-input-label">Выбрать файл</span>
                    </div>
                    <input
                      className="file-input"
                      onChange={handleFile}
                      type="file"
                      placeholder=""
                      name="image"
                      ref={register}
                    />
                  </div>
                </div>
                {errors.image && (
                  <span className="input_error">Обязательно поле</span>
                )}
              </label>
              {file ? (
                <div className="file-actions d-flex">
                  <div className="mr-8">
                    <Button
                      icon={AdminImages.EditIcon}
                      onClick={onEdit}
                      height="27px"
                      padding="2px 5px"
                    />
                  </div>
                  <div>
                    <Button
                      icon={AdminImages.TrashIcon}
                      onClick={onDelete}
                      height="27px"
                      padding="2px 5px"
                      backgroundColor="#EB6D73"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="file-img ml-64">
              <img src={file} alt="" />
            </div>
          </div>
        </div>
        <div className="mb-32">
          <InputText
            register={register}
            name="name"
            errors={errors}
            label="Name и Surname"
            placeholder=""
            width="647px"
            defaultValue={user?.name}
            required={true}
          />
        </div>

        <div className="mb-32">
          <InputText
            register={register}
            name="phone"
            errors={errors}
            label="Telephone"
            placeholder=""
            width="314px"
            defaultValue={user?.phone}
            required={true}
          />
        </div>

        <div className="mb-32">
          <InputText
            register={register}
            name="email"
            errors={errors}
            label="Email"
            placeholder=""
            width="647px"
            defaultValue={user?.email}
            required={true}
          />
        </div>

        <div className="mb-32">
          <InputText
            register={register}
            name="social"
            errors={errors}
            label="Telegram и Skype"
            placeholder=""
            width="647px"
            defaultValue={user?.social}
            required={true}
          />
        </div>
      </div>

      <div>
        <div className="d-flex align-center">
          <label style={{ width: "314px" }}>
            <span className="label_title">Password</span>
            <div className="input_primary_wrapper">
              <span className="input_icon_wrap d-flex justify-center align-center">
                <img
                  src={show ? AdminImages.view_hide : AdminImages.view_alt}
                  alt=""
                />
              </span>

              <input
                style={{ paddingLeft: "45px" }}
                className="primary"
                name="password"
                ref={register}
                placeholder=""
                type={show ? "text" : "password"}
              />
            </div>
            {errors.password && (
              <span className="input_error">Обязательно поле</span>
            )}
          </label>
          <div onClick={handleShow} className={`${style.hide_icon} ml-16`}>
            <img
              src={!show ? AdminImages.view_hide : AdminImages.view_alt}
              alt=""
            />
          </div>
        </div>

        <div className="mb-32">
          <InputText
            register={register}
            name="confirm_password"
            errors={errors}
            label="Повторите Password"
            placeholder=""
            type="password"
            width="314px"
          />
        </div>
      </div>

      <div>
        <label style={{ width: "314px" }}>
          <span className="label_title">День рождения</span>
          <div className="input_primary_wrapper">
            <span
              onClick={handleShow}
              className="input_icon_wrap d-flex justify-center align-center"
            >
              <img src={AdminImages.DateIcon} alt="" />
            </span>

            <DPicker
              date={date1}
              setdate={setdate1}
              style={{
                borderRadius: "8px",
                width: "210px",
              }}
            />
          </div>
          {errors["password"] && (
            <span className="input_error">Обязательно поле</span>
          )}
        </label>
      </div>

      <div className="">
        {userSelect.map((f, i) => {
          return (
            <div className="mb-32" key={i}>
              <label>{f.label}</label>
              <RSelect
                control={control}
                width="200px"
                register={register}
                options={f.options}
                name={f.name}
              />
            </div>
          );
        })}
      </div>

      <div className="d-flex">
        <div>
          <button type="submit" className="btn-main btn-main--dark mr-8">
            Сохранить
          </button>
        </div>
        <div className="ml-32">
          <button onClick={handleCancel} type="reset" className="btn-main">
            Отменить
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateUser;
