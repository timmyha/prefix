import styled, { ThemeProvider } from "styled-components";
import { useSnapshot } from "valtio";
import { store } from "./store";
import { useEffect } from "react";
import { keydownHandler } from "./utils/keydownHandler";
import BookmarkGrid from "./components/BookmarkGrid";
import Time from "./components/Time";
import Search from "./components/Search";
import { data } from "./data";
import { defaultTheme } from "./themes.styles";
import Settings from './components/Settings'

function App() {
  const snap = useSnapshot(store);

  // listens for a-z keypresses to conditionally render search input
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler, false);
    return () => window.removeEventListener("keydown", keydownHandler, false);
  }, []);

  // checks for local storage data, populates with default theme if none exists
  useEffect(() => {
    const defaultConfig = {
      user: {
        "search": "https://www.google.com/search?&q=",
        "newUser": true
      },
      theme: defaultTheme,
      data: data,
    };
    if (!window.localStorage.getItem("prefixData")) {
      window.localStorage.setItem("prefixData", JSON.stringify(defaultConfig));
      location.reload()
      store.prefixData = JSON.parse("prefixData");
    }
  }, []);

  return (
    <ThemeProvider theme={snap.prefixData ? snap.prefixData.theme : defaultTheme}>
     <Settings /> 
      {snap.input.length > 0 ? (
        <Search />
      ) : snap.input.length === 0 && snap.clock ? (
        <Container>
          <Time />
        </Container>
      ) : !snap.clock ? (
        <Container>
          <BookmarkGrid />
        </Container>
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
}

const Container = styled.div`
  display; flex;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.color.backgroundImg};
  transition: .1s;
`;

export default App;
