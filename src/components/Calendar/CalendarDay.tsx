import { ReactNode } from 'react'
import styled from 'styled-components'

type CalendarDayProps = {
    weekDay: number;
    marked?: boolean;
    className?: string;
    children: ReactNode;
}

// export const CalendarDay = styled.div`
//     grid-column: ${(props: CalendarDayProps) => props.weekDay} / ${(props: CalendarDayProps) => props.weekDay + 1};
//     display:flex;
//     align-items:center;
//     justify-content: center;
//     cursor:pointer;
//     transition: all .2s;
//     border-radius: 5px;
//     font-size: 16pt;
//     border: 1px solid rgba(0, 0, 0, 0);

//     &:hover{
//         background-color: rgba(0, 0, 0, 0.5);
//         border-color: #3200bd;
//     }
// `

export const CalendarDay = styled(CalendarDayComponent)`
    grid-column: ${(props: CalendarDayProps) => props.weekDay} / ${(props: CalendarDayProps) => props.weekDay + 1};
    display:flex;
    align-items:center;
    justify-content: center;
    cursor:pointer;
    transition: all .2s;
    border-radius: 5px;
    font-size: 16pt;
    border: 1px solid rgba(0, 0, 0, 0);
    color:#e4e4ea;
    margin: 5px;

    &.marked{
        background-color: rgba(50, 0, 189, 0.745);
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        border-color: #3200bd;
    }

`

function CalendarDayComponent(props: CalendarDayProps) {
    return (
        <div className={`${props.className} ${props.marked ? 'marked' : ''} `}>
            {props.children}
        </div>
    )

}

