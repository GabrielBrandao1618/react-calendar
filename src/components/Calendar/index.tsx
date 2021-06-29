import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useMonthDays } from '../../hooks/useMonthDays'

import { CalendarDay } from './CalendarDay'

export function Calendar() {

    const days = useMonthDays(2021, 4)

    useEffect(() => {
        console.log(days)
    }, [])

    return (
        <CalendarContainer>
            <CalendarHeader>
                <h2>CalendarHeader</h2>
            </CalendarHeader>
            <CalendarBody>
                <WeekDays>
                    <WeekDay>Dom</WeekDay>
                    <WeekDay>Seg</WeekDay>
                    <WeekDay>Ter</WeekDay>
                    <WeekDay>Qua</WeekDay>
                    <WeekDay>Qui</WeekDay>
                    <WeekDay>Sex</WeekDay>
                    <WeekDay>Sab</WeekDay>
                </WeekDays>
                <Days>
                    {days.map(day => (
                        <CalendarDay weekDay={day.weekDay}>
                            {day.day}
                        </CalendarDay>
                    ))}
                </Days>
            </CalendarBody>
        </CalendarContainer>
    )
}

const CalendarContainer = styled.div`
    display:grid;
    grid-template-rows: 100px 1fr;
    height: 80%;
    width: 80%;
`

const CalendarHeader = styled.div`
    background: red;
`
const CalendarBody = styled.div`
    background: blue;
    display:grid;

    grid-template-rows: 50px 1fr;
`

const WeekDays = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`
const WeekDay = styled.span`
    height: 95%;
    flex:1;
`

const Days = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
`

