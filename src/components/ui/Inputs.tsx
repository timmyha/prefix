import styled from 'styled-components'

export const Input = styled.input<{ height: string; width: string }>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background-color: transparent;
    border: none;
    text-align: center;
    color: #ffffff;
    caret-color: transparent;
    text-shadow: #333 1px 0 1px;
    &:focus {
        outline: none;
    }
`

export const SettingsInput = styled.input<{
    bgColor: string
    height: string
    width: string
}>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background-color: ${({ bgColor }) => bgColor};
    border: none;
    text-align: center;
    color: #000;
    caret-color: 000;
    text-shadow: #333 1px 0 1px;
    &:focus {
        outline: none;
    }
`
