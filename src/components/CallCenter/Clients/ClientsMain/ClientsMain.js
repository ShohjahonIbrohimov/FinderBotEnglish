import React, { useState } from 'react'
import UniversalButton from '../../../Reusable/UniversalButton';
import styles from "../styles/Clients.module.css";
import "../styles/Clients.css";
import SideBar from '../../../Reusable/SideBar';
import Button from '../../../Reusable/Button';
import { items } from '../items';
import Table from "./Table";
import ClientSideBarContent from './ClientSideBarContent';

const ClientsMain = () => {
    const [open, setOpen] = useState(false)

    const getInputValue = (data) => {
        console.log(data)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>

            <SideBar open={open} setOpen={setOpen}>
                <ClientSideBarContent open={open} setOpen={setOpen} />
            </SideBar>

            <div className={styles.main_div}>
                <div>
                    <div className={styles.row1}>

                        <button onClick={handleOpen} className="btn-main btn-main--green mr-8">+ Клиент</button>

                        {
                            items.buttons.map((item, index) => {
                                return (
                                    <UniversalButton
                                        key={index + item.name + 1}
                                        name={item.name}
                                        backgroundColor={item.backgroundColor}
                                        color={item.color}
                                        border={item.border}
                                        icon={item.icon}
                                        iconLeft={item.iconLeft}
                                        padding={item.padding}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.subrow1}>
                            {
                                items.buttons2.map((item, index) => {
                                    return (
                                        <UniversalButton
                                            key={index + item.name + 2}
                                            name={item.name}
                                            backgroundColor={item.backgroundColor}
                                            padding={item.padding}
                                            color={item.color}
                                            border={item.border}
                                            icon={item.icon}
                                            height={item.height}
                                            fontSize={item.fontSize}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className={styles.vertical_line}></div>
                        <div className={styles.subrow2}>
                            {
                                items.buttons3.map((item, index) => {
                                    return (
                                        <UniversalButton
                                            key={index + item.name + 3}
                                            name={item.name}
                                            backgroundColor={item.backgroundColor}
                                            padding={item.padding}
                                            color={item.color}
                                            border={item.border}
                                            icon={item.icon}
                                            height={item.height}
                                            fontSize={item.fontSize}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Table />
                </div>
            </div>
        </>
    )
}

export default ClientsMain;
