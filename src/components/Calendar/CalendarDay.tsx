import styled from 'styled-components'

type CalendarDayProps = {
    weekDay: number;
}

export const CalendarDay = styled.div`
    grid-column: ${(props: CalendarDayProps) => props.weekDay} / ${(props: CalendarDayProps) => props.weekDay + 1};
`