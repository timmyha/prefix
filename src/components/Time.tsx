import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { store } from '../store'
import { useSnapshot } from 'valtio'

const Time = () => {
    const snap = useSnapshot(store)
    const [_time, setTime] = useState<any>()
    // clock
    useEffect(() => {
        setInterval(() => {
            const d = new Date()
            setTime(
                d.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                })
            )
        }, 1000)
    }, [])

    const date = new Date()

    const timeDisplay = date.toLocaleTimeString(
        snap?.prefixData?.user.hour24 ? 'en-GB' : 'en-US',
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }
    )

    return <Clock onClick={() => (store.clock = false)}>{timeDisplay}</Clock>
}

const Clock = styled.div`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color.foreground};
    padding-top: 300px;
    font-family: ${(props) => props.theme.font.mono};
    cursor: pointer;
    font-size: 6rem;
    @media (max-height: 600px) {
        padding-top: 200px;
    }
`
export default Time
