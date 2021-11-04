import React from 'react'
import StatNav from './StatLayout/StatNav'
import StatCard from './StatLayout/StatCard'

import { AdminImages } from '../../../constants/icons'

const cards = [
    {
        name: "Oбрашения",
        numb: 804,
        stat_icon: AdminImages.Magnet
    },
    {
        name: "Прините",
        numb: 804,
        stat_icon: AdminImages.Magnet
    },
    {
        name: "Звонки",
        numb: 804,
        stat_icon: AdminImages.Magnet
    },
    {
        name: "Пропушеный",
        numb: 804,
        stat_icon: AdminImages.Magnet
    },
    {
        name: "Кленти",
        numb: 804,
        stat_icon: AdminImages.Magnet
    },
    {
        name: "Заявки",
        numb: 804,
        stat_icon: AdminImages.Magnet
    },

]


function index() {
    return (
        <div>
            <span className="page_section_title">Моя статистика</span>
            <StatNav />

            <div style={{ marginTop: "64px", display: "flex", rowGap: "30px", flexWrap: "wrap" }}>
                {cards.map((card, i) => {
                    return <StatCard key={i} title={card.name} numb={card.numb} stat_icon={card.stat_icon} />
                })}
            </div>
        </div>
    )
}

export default index
