import { proxy } from "valtio";
import { data, Data } from "./data";
import { defaultTheme, Theme } from "./themes.styles";

interface Store {
  input: string;
  data: Data[];
  theme: Theme;
  clock: boolean;
}

export const store = proxy<Store>({
  input: "",
  data: data,
  theme: defaultTheme,
  clock: true
});

export const functions = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    store.input = value;
  },
};
