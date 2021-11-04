import React, { useState, useEffect } from "react";
import styles from "./Webmaster.module.css";
import "./SearchNav.css";
import WebmasterTable from "./WebmasterTable";
import { webmaster_icons } from "../../../constants/icons";
import { Link } from "react-router-dom";
import Button from "../../Reusable/Button";

const WebmasterMain = () => {
  function get() {
    console.log("Search");
  }
  return (
    <div>
      <div class="w3-container w3-margin-left">
        <div class="wrap_first_page">
          <h1 class="main_title">Добавления текст инфо+ фото</h1>

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
        </div>

        <div class="important_news_wrapper">
          <h2>История важное инфо</h2>
          <div class="news_block">
            <div class="date">
              <p>14:20</p>
              <p>10.8.2021</p>
            </div>
            <div class="img_news"></div>
            <div class="news_text">
              <p>
                Здесь должно отображатся с какого плашадку и с кагого типа
                продается - Больше все эти даный берется с Сбота и система
                платежках .
              </p>
            </div>
          </div>
          <div class="news_block">
            <div class="date">
              <p>14:20</p>
              <p>10.8.2021</p>
            </div>
            <div class="img_news"></div>
            <div class="news_text">
              <p>
                Здесь должно отображатся с какого плашадку и с кагого типа
                продается - Больше все эти даный берется с Сбота и система
                платежках .
              </p>
            </div>
          </div>
          <div class="news_block">
            <div class="date">
              <p>14:20</p>
              <p>10.8.2021</p>
            </div>
            <div class="img_news"></div>
            <div class="news_text">
              <p>
                Здесь должно отображатся с какого плашадку и с кагого типа
                продается - Больше все эти даный берется с Сбота и система
                платежках .
              </p>
            </div>
          </div>
          <div class="news_block">
            <div class="date">
              <p>14:20</p>
              <p>10.8.2021</p>
            </div>
            <div class="img_news"></div>
            <div class="news_text">
              <p>
                Здесь должно отображатся с какого плашадку и с кагого типа
                продается - Больше все эти даный берется с Сбота и система
                платежках .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebmasterMain;
