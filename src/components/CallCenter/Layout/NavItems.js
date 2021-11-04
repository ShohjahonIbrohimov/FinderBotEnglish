import { layoutMenuIcons } from "../../../constants/icons";

const navItems = [
  {
    name: "Задачи ",
    icon: layoutMenuIcons.offer,
    link: "/calls/tasks",
    notification: 1,
  },
  {
    name: "Обращения",
    icon: layoutMenuIcons.creative,
    link: "/calls/appeals",
    notification: null,
  },
  {
    name: "Заказы",
    icon: layoutMenuIcons.stream,
    link: "/calls/orders",
    notification: null,
  },
  {
    name: "Продажи",
    icon: layoutMenuIcons.domain,
    link: "/calls/sales",
    notification: null,
  },
  {
    name: "Клиенты",
    icon: layoutMenuIcons.finance,
    link: "/calls/clients",
    notification: null,
  },
  {
    name: "Звонки",
    icon: layoutMenuIcons.statistics,
    link: "/calls/calls",
    notification: null,
  },
  {
    name: "Моя статистика",
    icon: layoutMenuIcons.instrument,
    link: "/calls/mystatistics",
    notification: null,
  },
  {
    name: "Личный кабинет",
    icon: layoutMenuIcons.new_request,
    link: "/calls/cabinet",
    notification: null,
  },
  {
    name: "Аналитика",
    icon: layoutMenuIcons.new_request,
    link: "/calls/analytics",
    notification: null,
  },
];

export default navItems;
