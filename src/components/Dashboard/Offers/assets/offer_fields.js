import { general_icons } from "../../../../constants/icons";

export const scenario = [];

export const crepc = [
  {
    width: "165px",
    label: "Условия",
    placeholder: "35",
    name: "condition",
  },
  {
    width: "165px",
    label: "На сайте",
    placeholder: "35",
    icon: general_icons.rubl,
    name: "online",
  },
  {
    width: "165px",
    label: "CR",
    placeholder: "35",
    name: "cr",
  },
  {
    width: "165px",
    label: "EPC",
    placeholder: "35",
    name: "epc",
  },
  {
    width: "165px",
    label: "Апрув",
    placeholder: "35",
    name: "apruv",
  },
];
export const countries = [
  {
    country: "russia",
  },
  {
    country: "kazakhstan",
  },
  {
    country: "ukrain",
  },
  {
    country: "belarus",
  },
];

export const info_type = [
  {
    label: "Компания",
    value: 0,
    id: "company",
  },
  {
    label: "Частный мастер",
    value: 1,
    id: "master",
  },
];

export const publish_options = [
  {
    label: "Главный экран топ",
    name: "publish_top",
  },
  {
    label: "Главный экран топ",
    name: "publish_bottom",
  },
  {
    label: "Новые оферы",
    name: "new_form",
  },
  {
    label: "Добавления список оферу",
    name: "list_offer",
  },
];

export const status_offer = [
  {
    label: "Лайт",
    value: 0,
    id: "light",
  },
  {
    label: "Новый оффера",
    value: 1,
    id: "new_offer",
  },
  {
    label: "Топовой",
    value: 2,
    id: "top_offer",
  },
];

export const payment_model = [
  {
    label: "CPO",
    value: 0,
    id: "cpo",
  },
  {
    label: "CPA",
    value: 1,
    id: "cpa",
  },
];

export const offer_geo = [
  {
    label: "Россия",
    value: 0,
    id: "russia",
  },
  {
    label: "Казахстан",
    value: 1,
    id: "kazak",
  },
  {
    label: "Украина",
    value: 2,
    id: "ukrain",
  },
  {
    label: "Беларусья",
    value: 3,
    id: "belarus",
  },
];

export const crepc_countries = [
  {
    label: "Россия",
    value: "russia",
    id: "russia_crepc",
  },
  {
    label: "Казахстан",
    value: "kazakhstan",
    id: "kazak_crepc",
  },
  {
    label: "Украина",
    value: "ukrain",
    id: "ukrain_crepc",
  },
  {
    label: "Беларусья",
    value: "belarus",
    id: "belarus_crepc",
  },
];

export const working_hours_countries = [
  {
    label: "Россия",
    value: "russia",
    id: "russia_working_hours",
  },
  {
    label: "Казахстан",
    value: "kazakhstan",
    id: "kazak_working_hours",
  },
  {
    label: "Украина",
    value: "ukrain",
    id: "ukrain_working_hours",
  },
  {
    label: "Беларусья",
    value: "belarus",
    id: "belarus_working_hours",
  },
];

export const traffic_countries = [
  {
    label: "Россия",
    value: "russia",
    id: "russia_traffic_countries",
  },
  {
    label: "Казахстан",
    value: "kazakhstan",
    id: "kazak_traffic_countries",
  },
  {
    label: "Украина",
    value: "ukrain",
    id: "ukrain_traffic_countries",
  },
  {
    label: "Беларусья",
    value: "belarus",
    id: "belarus_traffic_countries",
  },
];

export const pricelist_ocuntries = [
  {
    label: "Россия",
    value: "russia",
    id: "russia_pricelist_ocuntries",
  },
  {
    label: "Казахстан",
    value: "kazakhstan",
    id: "kazak_pricelist_ocuntries",
  },
  {
    label: "Украина",
    value: "ukrain",
    id: "ukrain_pricelist_ocuntries",
  },
  {
    label: "Беларусья",
    value: "belarus",
    id: "belarus_pricelist_ocuntries",
  },
];

export const offer_info_fields = [
  {
    label: "Описания оффера",
    name: "offer_info.offer_description",
  },
  {
    label: "Запрещено :",
    name: "offer_info.prohibited",
  },
  {
    label: "Обработка обращений",
    name: "offer_info.processing_requests",
  },
  {
    label: "Триггеры:",
    name: "offer_info.triggers",
  },
  {
    label: "Логистика выездов:",
    name: "offer_info.logistics_departure",
  },
  {
    label: "Логистика выездов:",
    name: "offer_info.logistics_departure",
  },
];

export const field_settings = {
  offer_direction: {
    name: "offer_direction",
    width: "320px",
    label: "Направления",
    placeholder: "Ничего не выбрано",
    options: [
      {
        value: "1",
        label: "Компьютерная помощь",
      },
      {
        value: "2",
        label: "Ремонт бытовой техники",
      },
      {
        value: "3",
        label: "Обслуживание интернет-сетей",
      },
      {
        value: "4",
        label: "Мастер на все руки",
      },
      {
        value: "5",
        label: "Ремонт Помишения",
      },
      {
        value: "6",
        label: "Клингинг",
      },
    ],
  },
  offer_category: {
    name: "offer_category",
    width: "320px",
    label: "Под котегория",
    placeholder: "Ничего не выбрано",
    options: [
      {
        value: "1",
        label: "Компьютерная помощь",
      },
      {
        value: "2",
        label: "Ремонт бытовой техники",
      },
      {
        value: "3",
        label: "Обслуживание интернет-сетей",
      },
      {
        value: "4",
        label: "Мастер на все руки",
      },
      {
        value: "5",
        label: "Ремонт Помишения",
      },
      {
        value: "6",
        label: "Клингинг",
      },
    ],
  },
  offer_photo: {
    name: "offer_photo",
    label: "Фото оффера",
  },
  offer_description: {
    name: "offer_description",
    width: "640px",
    label: "Описания оффера",
  },
  offer_name: {
    name: "offer_name",
    width: "320px",
    label: "Названия оффера",
    placeholder: "Ремонт и установка электрика",
  },
  offer_status: {
    name: "offer_status",
    label: "Status оффера",
    options: status_offer,
  },
  payment_amount: {
    name: "payment_amount",
    width: "320px",
    label: "Выплата",
    placeholder: "7000",
    icon: general_icons.rubl,
  },
  payment_model: {
    name: "payment_model",
    label: "Модель оплата",
    options: payment_model,
  },
  offer_geo: {
    name: "offer_geo",
    label: "Гео",
    options: offer_geo,
  },
  top_sources: {
    name: "top_sources",
    width: "320px",
    label: "Топ источники",
    placeholder: "google Ads yandex рся",
  },
  offer_price: {
    name: "offer_price",
    width: "320px",
    label: "Price",
    placeholder: "7000",
    icon: general_icons.rubl,
  },
  traffic_city: {
    name: "traffic_country",
    label: "Трафик принимается по городам:",
    options: traffic_countries,
  },
  prohibited_source_cashback: {
    name: "prohibited_source_cashback",
    width: "320px",
    placeholder: "Cashback-трафик",
  },
  prohibited_source_motivation: {
    name: "prohibited_source_motivation",
    width: "320px",
    placeholder: "Мотивированный трафик",
  },
  offer_description2: {
    name: "offer_description2",
    width: "640px",
    label: "Описания оффера",
  },
  working_hours: {
    name: "working_hours_country",
    label: "Время работа КЦ",
    options: working_hours_countries,
  },
  working_hours_am: {
    width: "80px",
    icon: "am",
  },
  working_hours_pm: {
    width: "80px",
    icon: "pm",
  },
};
