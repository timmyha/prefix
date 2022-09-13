import { proxy } from "valtio";
import { data, Data } from './data'

interface Store {
  input: string;
  data: Data[]
}

export const store = proxy<Store>({
  input: "",
  data: data
});

export const functions = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    store.input = value;
  },
};
