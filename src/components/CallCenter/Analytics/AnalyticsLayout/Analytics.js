import React from 'react'
import Radio from '../../../Reusable/Radio'
import { useForm } from 'react-hook-form'
import { AdminImages } from '../../../../constants/icons';
import AnalyticsCard from './AnalyticsCard'
import styles from './Analytics.module.css'

const analytics_data = [
    {
        label: "Показатели",
        value: 0,
        id: "pokazatel",
    },
    {
        label: "Аналитический отчет",
        value: 1,
        id: "otchet",
    },
    {
        label: "Анализ ассортимента",
        value: 2,
        id: "analiz",
    },
];



const cards = [
    {
        name: "Заказов сегодня",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Продаж сегодня",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Платежи клиентов сегодня",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Возвраты клиентов сегодня",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Новые",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Срочные",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Просрочные",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },
    {
        name: "Ждут оплату",
        numb: 0,
        stat_icon: AdminImages.Magnet,
        price: 0,
    },

]

function Analytics() {
    const { register } = useForm()
    return (
        <div>
            <div className="d-flex">
                <Radio
                    register={register}
                    name="analytics_data"
                    options={analytics_data}

                />
            </div>

            <div className={`${styles.analytics_body} d-flex w-100 align-center`}>
                <div className="grid_layout" style={{ marginTop: "64px" }}>
                    {cards.map((card, i) => {
                        return <AnalyticsCard key={i} title={card.name} numb={card.numb} stat_icon={card.stat_icon} price={card.price} />
                    })}
                </div>
                <div style={{ height: '100%', marginTop: "64px" }}>
                    <div className={styles.stat_sum}>
                        <div className={styles.stat_sum_icon}>
                            <img src={AdminImages.Magnet} alt="" />
                        </div>
                        <div className={`${styles.stat_sum_info}`}>

                            <span className={styles.stat_sum_value}>0</span>
                            <span className={styles.stat_sum_badge}>Нал:0|Б/н</span>

                            <h5 className={styles.stat_sum_title}>Всего денег в кассах</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics