'use client';

import React from "react"
import Title from "@/components/title"
import styles from 'styles/calendar.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
    return (
        <React.Fragment>
            <Title title="Calendar" />
            <div className={styles.calendar}>
                <FullCalendar
                    plugins={[dayGridPlugin]} 
                    initialView="dayGridMonth"
                    contentHeight="auto"
                />
            </div>
        </React.Fragment>
    )
}