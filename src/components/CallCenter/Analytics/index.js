import React from 'react'
import Analytics from './AnalyticsLayout/Analytics'



function index() {

    return (
        <div>
            <div className="d-flex justify-between align-center">
                <span className="page_section_title">Аналитика</span>
                <span className="">Помощь</span>
            </div>

            <Analytics />

        </div>
    )
}

export default index
