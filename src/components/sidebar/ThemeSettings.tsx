import styled from 'styled-components'
import ColorPickerInput from '../ColorPicker'
import { useState } from 'react'
import { Select } from '../ui/Selects.styles'
import { Button, ButtonSecondary } from '../ui/Buttons.styles'
import { store } from '../../store'
import { useSnapshot } from 'valtio'
import { updateLocalStorage } from '../../utils/updateLocalStorage'

const ThemeSettings = () => {
    const snap = useSnapshot(store)
    const saveTheme = () => {
        store.prefixData = {
            ...store.prefixData,
            theme: {
                ...store.prefixData.theme,
                color: {
                    ...snap.prefixData.theme.color,
                    backgroundImg: snap.backgroundColorPicker,
                },
            },
        }
        updateLocalStorage(store.prefixData)
    }

    return (
        <Container>
            <Setting>
                Main Background:&nbsp;
                <ColorPickerInput />
            </Setting>
            <Setting></Setting>
            <Button width="100px" onClick={saveTheme}>
                save
            </Button>
            <ButtonSecondary
                onClick={() => {
                    store.sidebarToggle = false
                }}
                width="100px"
            >
                cancel
            </ButtonSecondary>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20%;
    width: 100%;
    color: white;
    margin: auto;
    margin-top: 0px !important;
`

const Setting = styled.div`
    display: flex;
    font-family: ${(props) => props.theme.font.sans};
    margin: auto;
`

export default ThemeSettings
