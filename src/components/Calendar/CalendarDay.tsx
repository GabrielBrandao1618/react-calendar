import styled from 'styled-components'

type CalendarDayProps = {
    weekDay: number;
}

export const CalendarDay = styled.div`
    grid-column: ${(props: CalendarDayProps) => props.weekDay} / ${(props: CalendarDayProps) => props.weekDay + 1};
    display:flex;
    align-items:center;
    justify-content: center;
    cursor:pointer;
    transition: all .2s;
    border-radius: 5px;
    font-size: 16pt;
    border: 1px solid rgba(0, 0, 0, 0);

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        border-color: #3200bd;
    }
`