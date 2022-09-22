import { store } from '../store'

export const keydownHandler = (e: KeyboardEvent) => {
    const regex = /[a-zA-Z1-9!@#$%^&*()-=+_`~"':;?/\\><,. `]/
    if (store.input.length === 0) {
        if (regex.test(e.key) && e.key.length === 1) {
            store.clock = false
            store.input = e.key
        }
    }
    if (e.key === 'Escape') {
        store.clock = true
        store.input = ''
    }
}
