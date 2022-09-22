import { SettingsInput } from './ui/Inputs'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ColorPicker from 'react-best-gradient-color-picker'
import { store } from '../store'

const ColorPickerInput = () => {
    const [color, setColor] = useState<string>('rgba(255,255,255,1)')
    const [picker, setPicker] = useState<boolean>(false)

    useEffect(() => {
        store.backgroundColorPicker = color
    }, [color])

    return (
        <div>
            <ColorPreview onClick={() => setPicker(!picker)} bgColor={color} />
            {picker === true && (
                <PickerDiv height="100%">
                    <ColorPicker
                        value={color}
                        onChange={setColor}
                        hidePresets={true}
                        hideColorGuide={true}
                        hideEyeDrop={true}
                        hideAdvancedSliders={true}
                        hideInputType={true}
                        hideInputs={true}
                        width={200}
                        height={100}
                    />
                </PickerDiv>
            )}
        </div>
    )
}

const ColorPreview = styled.div<{ bgColor: string }>`
    height: 50px;
    width: 50px;
    border-radius: 7px;
    background: ${({ bgColor }) => bgColor};
`

const PickerDiv = styled.div<{ height: string }>`
    background: #222;
    margin-left: 50px;
    margin-top: -50px;
    offset-position: bottom 50px right 50px;
    height: ${({ height }) => height};
    width: 203px;
    border-radius: 7px;
    border: 1px solid ${({ theme }) => theme.color.accent};
`

export default ColorPickerInput
