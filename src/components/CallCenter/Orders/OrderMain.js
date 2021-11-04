import React from 'react'
import OrderFilter from './OrderFilter'
import OrderTable from './OrderTable'

function OrderMain() {
    return (
        <div>
            <span className="page_section_title">Заказы</span>
            <OrderFilter />
            <OrderTable />
        </div>
    )
}

export default OrderMain;
