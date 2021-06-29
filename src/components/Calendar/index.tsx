import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useMonthDays } from '../../hooks/useMonthDays'

import { CalendarDay } from './CalendarDay'

export function Calendar() {

    const date = new Date()



    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth() + 1)

    const { days, monthName } = useMonthDays(year, month)

    return (
        <CalendarContainer>
            <CalendarHeader>
                <h2>{monthName}, {month}</h2>

                <select onChange={e => setMonth(Number(e.target.value))} value={month}>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Abr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                </select>

                <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} />
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
                        <CalendarDay weekDay={day.weekDay} key={day.day}>
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

