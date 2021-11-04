import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import InputText from "../../../Reusable/InputText";
import { AdminImages } from "../../../../constants/icons";
import style from "./CreateUser.module.css";
import { useParams } from "react-router-dom";
import RSelect from "../../../Reusable/Select";
import FileInput from "../../../Reusable/FileInput";
import Button from "../../../Reusable/Button";
import { updateUser } from "../../../../api/api_calls";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { get_users_all } from "../../../../redux/users/thunks";
import { userSelect } from "./items";
import DPicker from "../../../Reusable/DataPicker";

function EditUser() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();
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

  const handleEdit = (data) => {
    let birthday = date1.day + "-" + date1.month + "-" + date1.year;
    let userData = {
      image: file,
      name: data.name,
      phone: data.phone,
      role: +data.role?.value,
      social: data.social,
      status: +data.status?.value,
      birthday: birthday,
    };
    console.log(data);
    console.log(userData);

    if (id) {
      toast.promise(updateUser(id, userData), {
        duration: 3000,
        loading: "Обновляеться...",
        success: () => afterSuccess(),
        error: () => afterError(),
      });
      history.push("/users");
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
    setFile(URL?.createObjectURL(e.target.files[0]));
  };

  const onEdit = () => {
    inputFile.current.click();
  };

  const onDelete = () => {
    setFile("");
  };

  return (
    <div class="w3-container">
      <div class="wrap_first_page">
        <h1 class="main_title">Добовления и изменения Price</h1>

        <label for="upload" class="img_gif_uploader">
          <input type="file" id="upload" />
          <h2>&#43;</h2>
          <p>Фото и Гиф</p>
        </label>

        <div class="triple_btn">
          <button class="w3-button w3-small w3-blue w3-round w3-ripple">
            Add
          </button>
          <button class="w3-button w3-small w3-red w3-round w3-ripple">
            Удалить
          </button>
          <button class="w3-button w3-small w3-indigo w3-round w3-ripple">
            Сохранить
          </button>
        </div>

        <div class="top_part">
          <h3>наш бот умеит все </h3>
        </div>

        <div class="button_wrapper">
          <div class="left_btn_wrapper">
            <button class="w3-button w3-small w3-blue w3-round w3-ripple">
              Add
            </button>
            <button class="w3-button w3-small w3-green w3-round w3-ripple">
              Изменить
            </button>
            <button class="w3-button w3-small w3-red w3-round w3-ripple">
              Удалить
            </button>
          </div>
          <div class="right_btn_wrapper">
            <button class="w3-button w3-small w3-blue w3-round w3-ripple">
              Сохранить
            </button>
          </div>
        </div>

        <div class="bottom_part"></div>

        <div class="save_btn">
          <button class="w3-button w3-small w3-blue w3-round w3-right w3-ripple">
            Сохранить
          </button>
        </div>
        <div>
          <div class="item">
            <h3>Плошадки</h3>
            <select name="" id="">
              <option value="">Facebook</option>
              <option value="">Tik-tok</option>
              <option value="">Google</option>
            </select>
          </div>
          <div class="item">
            <h3>Тип</h3>
            <select name="" id="">
              <option value="">BM Facebook 50$</option>
              <option value="">BM Facebook 250$</option>
              <option value="">AK FB ЗРД + ФП + БМ + TOKEN EAAB</option>
              <option value="">
                Соц + БМ + ФП + линк инвайта в БМ + EAAB (личка) + EAAG (БМ)
              </option>
              <option value="">
                Аккаунты ФБ ФП есть 14+ дней фарма + Token EAAB (есть фото) с
                друзьями .
              </option>
              <option value="">BM TRUST 250$</option>
              <option value="">BM VERIFIED (БЕЗ ДНЕВНОГО ЛИМИТА) -</option>
            </select>
          </div>
          <div class="item">
            <h3>Гео</h3>
            <select name="" id="">
              <option value="">Россия</option>
              <option value="">Франция</option>
              <option value="">Украина</option>
              <option value="">США</option>
            </select>
          </div>
          <div class="item">
            <h3>Price</h3>
            <input type="text" value="250$" name="" id="" />
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <img src="../img/card.png" alt="" />
          <div class="text">
            USA Tik-Tok Ad cabinet - 899руб / $12 / 335грн <br />
            <br />
            Потвержденные рекламные аккаунты <br />
            БЕЗ НДС.
          </div>
        </div>
        <div class="card">
          <img src="../img/card.png" alt="" />
          <div class="text">
            GOOGLE ADWORDS (Billing €300/$350) <br />
            <br />
            Перед покупкой уточняйте наличие и стоимость у админа <br />
            <br />
            - Аккаунты с кредитным лимитом €300 / $350 <br />
            <br />
            Вы получаете; <br />
            Login:Password / useragent и прокси от аккаунта на котором уже стоит
            дефолтный лимит
          </div>
        </div>
        <div class="card">
          <img src="../img/card.png" alt="" />
          <div class="text">
            BM Facebook $50 (Daily Limit) - 779p / $10 / 280грн BM позволит
            отливать вашу рекламу на $50 в день - Вы получаете ссылку
            приглашение <br />
            - Вводите рандомные(случайное) Name и данные <br />
            - Можно удалять админа <br />
            - Принять в течении 2 дней после покупки <br />
            - Email потверждена <br />
            - Замена в течении 24 часов после покупки в случае если получили бан
            при приеме <br />
            - Доп инструкция по безопасному запуску после приобретения <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
