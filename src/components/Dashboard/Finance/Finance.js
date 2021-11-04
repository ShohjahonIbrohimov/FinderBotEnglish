import React, { useState } from "react";
import Table from "./Table";
import Modal from "../../Reusable/Modal";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateFinance } from "../../../api/api_calls";

const Finance = () => {
  const [open, setopen] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);
  const { register, errors, control, handleSubmit, watch, reset } = useForm();

  const textareastyle = {
    width: "100%",
    border: "1px solid #535768",
    background: "transparent",
    color: "#fff",
    fontSize: "1rem",
    padding: "1rem",
    borderRadius: "5px",
  };

  const formstyle = {
    width: "80%",
  };

  const onSubmit = (data) => {
    console.log(currentUser);
    toast.promise(updateFinance(data), {
      loading: "Отправка комментария ...",
      success: () => "Успех",
      error: <b>Ошибка при отправке комментария</b>,
    });
  };

  return (
    <div class="w3-container">
    <h1>Статистика</h1>
    <div class="single-statistics">
      <h3>Добавленные аккаунты</h3>
      <div class="page-header statistics-filter">
        <input type="date" id="birthday" name="birthday" />
        <select>
          <option value="0">Вчера</option>
          <option value="0">Вчера</option>
          <option value="1">За неделю</option>
        </select>
        <select>
          <option value="0">По плошадкам</option>
          <option value="1">Facebook</option>
          <option value="2">Tik-Tok</option>
          <option value="3">Google</option>
          <option value="4">Все</option>
        </select>
        <select>
          <option value="0">По типам</option>
          <option value="1">BM Facebook 50$</option>
          <option value="2">
            RU/UKR Tik-Tok Ad cabinet Потвержденные рекламные аккаунты БЕЗ
            НДС
          </option>
          <option value="3">GOOGLE ADWORDS (Billing €300/$350)</option>
        </select>
      </div>
      <div class="stat-box-wrap">
        <div class="stat-box">
          <h3 class="stat-box-title">Обшие</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Facebook</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Tik-Tok</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Google</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
      </div>
    </div>
    <div class="single-statistics">
      <h3>Проданные аккаунты</h3>
      <div class="page-header statistics-filter">
        <input type="date" id="birthday" name="birthday" />
        <select>
          <option value="0">Вчера</option>
          <option value="0">Вчера</option>
          <option value="1">За неделю</option>
        </select>
        <select>
          <option value="0">По плошадкам</option>
          <option value="1">Facebook</option>
          <option value="2">Tik-Tok</option>
          <option value="3">Google</option>
          <option value="4">Все</option>
        </select>
        <select>
          <option value="0">По типам</option>
          <option value="1">BM Facebook 50$</option>
          <option value="2">
            RU/UKR Tik-Tok Ad cabinet Потвержденные рекламные аккаунты БЕЗ
            НДС
          </option>
          <option value="3">GOOGLE ADWORDS (Billing €300/$350)</option>
        </select>
      </div>
      <div class="stat-box-wrap">
        <div class="stat-box">
          <h3 class="stat-box-title">Обшие</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Facebook</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Tik-Tok</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Google</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
      </div>
    </div>
    <div class="single-statistics">
      <h3>Возвраты</h3>
      <div class="page-header statistics-filter">
        <input type="date" id="birthday" name="birthday" />
        <select>
          <option value="0">Вчера</option>
          <option value="0">Вчера</option>
          <option value="1">За неделю</option>
        </select>
        <select>
          <option value="0">По плошадкам</option>
          <option value="1">Facebook</option>
          <option value="2">Tik-Tok</option>
          <option value="3">Google</option>
          <option value="4">Все</option>
        </select>
        <select>
          <option value="0">По типам</option>
          <option value="1">BM Facebook 50$</option>
          <option value="2">
            RU/UKR Tik-Tok Ad cabinet Потвержденные рекламные аккаунты БЕЗ
            НДС
          </option>
          <option value="3">GOOGLE ADWORDS (Billing €300/$350)</option>
        </select>
      </div>
      <div class="stat-box-wrap">
        <div class="stat-box">
          <h3 class="stat-box-title">Обшие</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Facebook</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Tik-Tok</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Google</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
      </div>
    </div>
    <div class="single-statistics">
      <h3>Замена</h3>
      <div class="page-header statistics-filter">
        <input type="date" id="birthday" name="birthday" />
        <select>
          <option value="0">Вчера</option>
          <option value="0">Вчера</option>
          <option value="1">За неделю</option>
        </select>
        <select>
          <option value="0">По плошадкам</option>
          <option value="1">Facebook</option>
          <option value="2">Tik-Tok</option>
          <option value="3">Google</option>
          <option value="4">Все</option>
        </select>
        <select>
          <option value="0">По типам</option>
          <option value="1">BM Facebook 50$</option>
          <option value="2">
            RU/UKR Tik-Tok Ad cabinet Потвержденные рекламные аккаунты БЕЗ
            НДС
          </option>
          <option value="3">GOOGLE ADWORDS (Billing €300/$350)</option>
        </select>
      </div>
      <div class="stat-box-wrap">
        <div class="stat-box">
          <h3 class="stat-box-title">Обшие</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Facebook</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Tik-Tok</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
        <div class="stat-box">
          <h3 class="stat-box-title">Google</h3>
          <h1 class="stat-box-number">23</h1>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Finance;
