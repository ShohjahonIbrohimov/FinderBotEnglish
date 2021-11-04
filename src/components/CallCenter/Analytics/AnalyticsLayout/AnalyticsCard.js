import React from 'react'
import styles from './Analytics.module.css'


function StatCard({ title, numb, stat_icon, price }) {
    return (
        <div className={styles.stat_card}>
            <div className={styles.stat_card_icon}>
                <img src={stat_icon} alt="" />
            </div>
            <div className={`${styles.stat_card_info}`}>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <span>{numb}</span>
                    <span className={styles.stat_sum_price}>{price} %</span>
                </div>
            </div>

        </div>
    )
}

export default StatCard
