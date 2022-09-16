export const updateLocalStorage = (data: any) => {
  window.localStorage.setItem('prefixData', JSON.stringify(data))
}
