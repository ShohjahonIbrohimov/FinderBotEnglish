

export const calls_filter = [
    {
        label: "Все",
        value: 0,
        id: "all",
    },
    {
        label: "Входящие",
        value: 1,
        id: "upcomming",
    },
    {
        label: "Исходящие",
        value: 2,
        id: "incomming",
    },
];

export const items = {
    buttons: [
        {
            name: "Все",
            backgroundColor: "#4E5C86",
            padding: "15px 40px",
            fontSize: "12px",
            height: "22px",
            color: "fff",
            border: "none"
        },
        {
            name: "Входящие",
            backgroundColor: "#E2E4F5",
            padding: "14px 40px",
            fontSize: "12px",
            height: "20px",
            color: "#B3B7D4",
            border: "1px solid #B3B7D5"
        },
        {
            name: "Исходящие",
            backgroundColor: "#E2E4F5",
            padding: "14px 40px",
            fontSize: "12px",
            height: "20px",
            color: "#B3B7D4",
            border: "1px solid #B3B7D5"
        }
    ],
    field: [
        {
            label: "Направления",
            name: "news",
            options: [
                {
                    value: "1",
                    label: "- Не задано -",
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
        }
    ]
}
