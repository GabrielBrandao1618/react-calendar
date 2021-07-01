import { useState } from 'react';
import styled from 'styled-components';
import { useMonthDays } from '../../hooks/useMonthDays';

import { CalendarDay } from './CalendarDay';

import arrowLeft from '../../assets/icons/arrow_left.svg';
import arrowRight from '../../assets/icons/arrow_right.svg';
import calendarIcon from '../../assets/icons/calendar.svg';

import { months } from '../../hooks/useMonthDays';

import { CalendarHeader } from './Header';

export function Calendar() {

    const date = new Date()

    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth() + 1)

    const { days, monthName } = useMonthDays(year, month)

    function handleChangeYear(dif: number) {
        setYear(year + dif)
    }

    function handleChangeMonth(dif: number) {
        if (month + dif < 1) {
            return setMonth(12);
        }
        if (month + dif > 12) {
            return setMonth(1);
        }

        setMonth(month + dif)
    }

    return (
        <CalendarContainer>
            <CalendarHeader>

                <div className="infos">
                    <h3>{monthName.toUpperCase()}</h3>
                </div>

                <div className="date-selectors">
                    <div className="date-selector">
                        <button onClick={() => handleChangeMonth(-1)}>
                            <img src={arrowLeft} alt="Seta para a esquerda" />
                        </button>

                        <select onChange={e => setMonth(Number(e.target.value))} value={month}>
                            {months.map((month, index) => {
                                return (
                                    <option value={index + 1} key={month.name}>
                                        {month.name}
                                    </option>
                                )
                            })}
                        </select>

                        <button onClick={() => handleChangeMonth(1)}>
                            <img src={arrowRight} alt="Seta para a direita" />
                        </button>
                    </div>

                    <div className="date-selector">
                        <button onClick={() => handleChangeYear(-1)}>
                            <img src={arrowLeft} alt="Seta para a esquerda" />
                        </button>
                        <input
                            type="number"
                            min="1970"
                            value={year}
                            onChange={e => setYear(Number(e.target.value))}
                        />
                        <button onClick={() => handleChangeYear(1)}>
                            <img src={arrowRight} alt="Seta para a esquerda" />
                        </button>
                    </div>
                </div>

                <button className="today-btn" onClick={() => {
                    setYear(date.getFullYear())
                    setMonth(date.getMonth() + 1)
                }}>
                    <img src={calendarIcon} alt="Ícone de calendário" />
                </button>

            </CalendarHeader>
            <CalendarBody>
                <div className="weekdays">
                    <div className="weekday">Dom</div>
                    <div className="weekday">Seg</div>
                    <div className="weekday">Ter</div>
                    <div className="weekday">Qua</div>
                    <div className="weekday">Qui</div>
                    <div className="weekday">Sex</div>
                    <div className="weekday">Sab</div>
                </div>
                <Days>
                    {days.map(day => (
                        <CalendarDay
                            weekDay={day.weekDay}
                            key={day.day}
                            marked={day.day === date.getDate() && month - 1 === date.getMonth() && year === date.getFullYear()}
                        >
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
    width: 100%;
    max-width: 800px;
`

const CalendarBody = styled.div`
    background: #0f0b20;
    display:grid;
    color:white;

    .weekdays{
        display:flex;
        align-items:center;
        justify-content: space-between;


        .weekday{
            height: 95%;
            flex:1;
            display:flex;
            align-items:center;
            justify-content: center;
        }
    }

    grid-template-rows: 50px 1fr;
`


const Days = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`

