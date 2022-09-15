import { store } from "../store";
import { validateUrl } from './validateUrl'


export const submitQuery = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    if (stagedShortcut[0]) {
      window.location.href = stagedShortcut[0].url;
    }

    if (validateUrl(store.input)) {
      window.location.href = `https://${store.input}`;
    }
  }
};

export const bgColor = (str: string | undefined) => {
  switch (str) {
    case "twitter":
      return "lightblue";
    case undefined:
      return "red";
  }
};
