import React from 'react'
import Rangepicker from '../../../Reusable/Rangepicker'
import RSelect from '../../../Reusable/Select'
import { useForm } from 'react-hook-form'

import styles from '../Stat.module.css'

const field = [
    {
        label: "Направления",
        name: "news",
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
    }
]

function StatNav() {
    const {
        register,
        handleSubmit,
        control,
    } = useForm();

    return (
        <div>
            <div className="d-flex">
                <div className="d-flex flex-column">

                    <Rangepicker label={"Период"} />
                </div>
                {field.map((f, i) => {
                    return <div key={i} className="ml-32">
                        <label className={styles.statNav_label}>{f.label}</label>

                        <RSelect

                            width="280px"
                            register={register}
                            options={f.options}
                            name={f.name}
                            control={control}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default StatNav
