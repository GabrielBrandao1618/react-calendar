
export const months = [
    {
        name: 'jan',
        days: 31
    },
    {
        name: 'feb',
        days: 28
    },
    {
        name: 'mar',
        days: 31
    },
    {
        name: 'abr',
        days: 30
    },
    {
        name: 'may',
        days: 31
    },
    {
        name: 'jun',
        days: 30
    },
    {
        name: 'jul',
        days: 31
    },
    {
        name: 'aug',
        days: 31
    },
    {
        name: 'set',
        days: 30
    },
    {
        name: 'out',
        days: 31
    },
    {
        name: 'nov',
        days: 30
    },
    {
        name: 'dec',
        days: 31
    }
]


export function useMonthDays(year: number, month: number) {

    let days = []
    let extra = (year % 4 === 0 && month === 2 ? 1 : 0);

    for (let i = 1; i < (months[month - 1].days + 1) + extra; i++) {
        days.push({
            day: i,
            weekDay: getWeekDay(year, month - 1, i) + 1
        })
    }

    const monthName = months[month - 1].name

    return { days, monthName }
}

function getWeekDay(year: number, month: number, day: number) {
    const date = new Date(year, month, day)

    return date.getDay()
}