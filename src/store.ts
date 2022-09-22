import { proxy } from 'valtio'
import { Data } from './data'
import { Theme } from './themes.styles'

interface Store {
    input: string
    prefixData: { user: any; data: Data[]; theme: Theme }
    clock: boolean
    sidebarToggle: boolean
    rawData: string | null
    backgroundColorPicker: string
}

export const store = proxy<Store>({
    input: '',
    prefixData: JSON.parse(window.localStorage.getItem('prefixData') as string),
    clock: true,
    sidebarToggle: false,
    rawData: window.localStorage.getItem('prefixData'),
    backgroundColorPicker: '',
})

export const functions = {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        store.input = value
    },
}
