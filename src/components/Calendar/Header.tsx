import styled from 'styled-components'

export const CalendarHeader = styled.div`
    background: #0f0b20;
    display:flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    > *{
        margin: 10px;
    }

    .today-btn{
        background: none;
        border:none;
        cursor:pointer;
        width: 50px;
        height: 50px;
        padding: 4px;
        border-radius: 50%;
        transition: all .2s;
        border: 1px solid white;

        svg{
            width: 100%;
            height: 100%;
        }

        &:hover{
            background:#310696;
            border-color:rgba(0, 0, 0, 0);
        }

    }

    .infos{
        color:white;
        font-size: 15pt;
    }

    .date-selectors{
        display:flex;
        flex-flow: column nowrap;
        align-items:center;
        width: 40%;
    }

    .date-selector{
        width: 90%;
        max-width: 190px;
        display:flex;
        align-items:center;
        justify-content: space-between;
        border: 1px solid white;
        border-radius: 8px;
        margin: 3px;

        button{
            background:none;
            border:none;
            outline:none;
            border-radius: 50%;
            cursor:pointer;
            width: 30px;
            height: 30px;
            display:flex;
            align-items: center;
            justify-content: center;
            transition: all .2s;

            &:hover{
                background-color: #323232;
            }
        }

        input, select{
            flex:1;
            max-width: 60px;
            outline: none;
            border:none;
            padding: 2px;
            border-radius: 8px;
            background:none;
            color: white;
        }

        select option{
            background-color:rgb(15, 11, 32);
            border:none;
            outline:none;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

            &:hover{
                background-color:rgb(50, 0, 189);
            }
        }
    }
`