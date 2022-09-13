import { store } from '../store'

export const keydownHandler = (e: KeyboardEvent) => {
    const regex = /[a-zA-Z]/;
    if (store.input.length === 0) {
      if (regex.test(e.key) && e.key.length === 1) {
        store.input = e.key
      }
    }
  }
