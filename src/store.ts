import { proxy } from "valtio";
import { Data } from "./data";
import { Theme } from "./themes.styles";

interface Store {
  input: string;
  prefixData: {user: any, data: Data[], theme: Theme};
  clock: boolean;
  sidebarToggle: boolean
  rawData: string | null
}

export const store = proxy<Store>({
  input: "",
  prefixData: JSON.parse(window.localStorage.getItem('prefixData') as string),
  clock: true,
  sidebarToggle: false,
  rawData: window.localStorage.getItem('prefixData') 
});

export const functions = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    store.input = value;
  },
};
