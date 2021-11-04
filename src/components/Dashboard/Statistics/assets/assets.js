import { getValueLabel } from "../../../../utils/helpers";

const master_options = [
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

const tool_options = [
  {
    label: "Конструктор форма",
    value: 1,
    id: "contructor",
  },
  {
    label: "Лендинги",
    value: 2,
    id: "landing",
  },
  {
    label: "Сайт в системе",
    value: 3,
    id: "site_system",
  },
  {
    label: "Телеграм Бот",
    value: 4,
    id: "bot",
  },
  {
    label: "WhatsApp",
    value: 5,
    id: "whatsapp",
  },
];

export const getLayoutFields = ({
  regions,
  statistics,
  directions,
  scenarios,
  pay,
  hold,
  offers,
  streams,
  instruments,
}) => {
  return [
    {
      name: "direction",
      type: "select",
      width: "145px",
      options: [],
      label: "Направление",
    },
    {
      name: "offers",
      type: "select",
      width: "155px",
      options: [],
      label: "Офферы",
    },
    {
      name: "streams",
      type: "select",
      width: "115px",
      options: [],
      label: "Потоки",
    },
    {
      name: "utm_source",
      type: "select",
      width: "130px",
      options: [
        {
          label: "utm_source",
          value: "1",
        },
        {
          label: "option2",
          value: "2",
        },
      ],
      label: "utm_source",
    },
    {
      name: "utm_medium",
      type: "select",
      width: "140px",
      options: [
        {
          label: "utm_medium",
          value: "1",
        },
        {
          label: "option2",
          value: "2",
        },
      ],
      label: "utm_medium",
    },
    {
      name: "utm_campaign",
      type: "select",
      width: "150px",
      options: [
        {
          label: "utm_campaign",
          value: "1",
        },
        {
          label: "option2",
          value: "2",
        },
      ],
      label: "utm_campaign",
    },
    {
      name: "utm_content",
      type: "select",
      width: "140px",
      options: [
        {
          label: "utm_content",
          value: "1",
        },
        {
          label: "option2",
          value: "2",
        },
      ],
      label: "utm_content",
    },
    {
      name: "country",
      type: "select",
      width: "110px",
      options: [],
      label: "Cтраны",
    },
    {
      name: "city",
      type: "select",
      width: "110px",
      options: [],
      label: "Города",
    },
    {
      name: "SUB_ID",
      type: "select",
      label: "SUB_ID",
      width: "103px",
      options: [
        {
          label: "SUB_ID",
          value: "1",
        },
        {
          label: "option2",
          value: "2",
        },
      ],
    },
    {
      name: "scenarios",
      type: "select",
      width: "130px",
      options: [],
      label: "СPriceрий",
    },
    {
      name: "instrument",
      type: "select",
      width: "140px",
      options: [
        {
          label: "social",
          value: 1,
        },
        {
          label: "browcer_antitect",
          value: 2,
        },
        {
          label: "service",
          value: 3,
        },
      ],
      label: "Инструмент",
    },
  ];
};

// CONSTRUCTOR FORM
export const form_types = [
  {
    label: "Базовые",
    value: 1,
    id: "basic",
  },
  {
    label: "Продвигнутые",
    value: 0,
    id: "advanced",
  },
];

export const structure_fields = [
  {
    type: "text",
    name: "titleForm",
    label: "Заголовок*",
    placeholder: "Заказать звонок",
    basic: true,
  },
  {
    type: "text",
    name: "field_name",
    label: "Поле имени",
    placeholder: "Ваше Name",
    basic: false,
  },
  {
    type: "text",
    name: "comment",
    placeholder: "Опишите характер проблемы",
    label: "Поле комментария",
    basic: false,
  },
  {
    type: "text",
    name: "buttonTitle",
    placeholder: "Позвоните мне!",
    label: "Кнопка",
    basic: true,
  },
];

export const back_image_fields = [
  {
    type: "text",
    name: "linkImage",
    label: "Фон",
  },
  {
    type: "text",
    name: "colorTextForm",
    label: "Цвет формы",
  },
  {
    type: "text",
    name: "colorButton",
    label: "Цвет кнопки",
  },
];

export const form_sizes = [
  {
    type: "text",
    name: "width",
    label: "Ширина",
  },
  {
    type: "text",
    name: "height",
    label: "Минимаьная высота",
  },
  {
    type: "text",
    name: "marginTop",
    label: "Отступ сверху",
  },
  {
    type: "text",
    name: "marginBottom",
    label: "Отступ снизу",
  },
];
