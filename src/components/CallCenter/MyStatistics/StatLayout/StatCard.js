import React from 'react'
import styles from '../Stat.module.css'

function StatCard({ title, numb, stat_icon }) {
    return (
        <div className={styles.stat_card}>
            <div className={styles.stat_card_icon}>
                <img src={stat_icon} alt="" />
            </div>
            <div className={styles.stat_card_info}>
                <h5>{title}</h5>
                <span className={styles.stat_card_price}>{numb}</span>
            </div>
        </div>
    )
}

export default StatCard
