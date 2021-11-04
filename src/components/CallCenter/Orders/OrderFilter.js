import React, { useState } from 'react'
import { AdminImages } from '../../../constants/icons'
import RSelect from '../../Reusable/Select'
import styles from './Order.module.css'
import { useForm } from "react-hook-form";
import { filterData } from './items'
import SideBar from '../../Reusable/SideBar';
import OrderSideBar from './OrderSideBar';


function OrderFilter() {
    const [open, setOpen] = useState(false);
    const [showFilter, setShowFilter] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <>
            <SideBar open={open} setOpen={setOpen}>
                <OrderSideBar open={open} setOpen={setOpen} />
            </SideBar>
            <button onClick={handleOpen} className="btn-main btn-main--green mb-32">+ Заказ</button>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div style={{ cursor: "pointer" }} className="d-flex align-center mb-24" onClick={() => setShowFilter(!showFilter)}>
                    <div className="mr-16">
                        <img src={AdminImages.FilterIcon} alt="" />
                    </div>
                    <span>Фильтр</span>
                </div>

                <div className={`${styles.filterContent} ${showFilter ? styles.showFilter : ''}`}>
                    {filterData.map((f, i) => {
                        return (
                            <div className={styles.filterSelect} key={i}>
                                <RSelect
                                    control={control}
                                    register={register}
                                    options={f.options}
                                    name={f.name}
                                    label={f.label}

                                />
                            </div>
                        );
                    })}
                </div>

                <div className="d-flex align-center column-gap-20">
                    <button type="submit" className="btn-main btn-main--dark">Применить</button>
                    <button type="submit" className="btn-main">Создать фильтр
                    </button>
                    <button type="submit" className="btn-main">x Сбросить параметры</button>
                </div>
            </form>
        </>
    )
}

export default OrderFilter
