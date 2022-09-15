import styled, { ThemeProvider } from "styled-components";
import { Input } from "./components/ui/Inputs";
import { useSnapshot } from "valtio";
import { store, functions } from "./store";
import { useEffect } from "react";
import { keydownHandler } from "./utils/keydownHandler";
import { validateUrl } from "./utils/validateUrl";
import BookmarkGrid from "./components/BookmarkGrid";
import Bookmark from "./components/Bookmark";
import Time from "./components/Time";

function App() {
  const snap = useSnapshot(store);
  const { handleInput } = functions;

  const bookmarks = store.data
    .sort((a, b) => a.id - b.id)
    .map((bookmark) => {
      return (
        <Bookmark
          key={bookmark.id}
          color={bookmark.color}
          name={bookmark.name}
          prefix={bookmark.prefix}
        />
      );
    });

  const stagedShortcut = snap.data.filter((bookmark) => {
    const prefix = bookmark.prefix;
    const match = prefix.includes(snap.input) && prefix[0] === snap.input[0];
    if (match) return match;
  });

  const submitQuery = (e: KeyboardEvent) => {
    try {
      if (e.key === "Enter") {
        stagedShortcut[0]
          ? (window.location.href = stagedShortcut[0].url)
          : snap.input[0] === "!"
          ? window.location.href = `https://duckduckgo.com/?q=${snap.input}`
          : validateUrl(snap.input)
          ? (window.location.href = `https://${snap.input}`)
          : !validateUrl(snap.input) &&
            (window.location.href = `https://www.google.com/search?&q=${snap.input}`)
      }
    } catch (error) {
      console.warn("malformed URI, using search engine.");
      window.location.href = `https://www.google.com/search?&q=${snap.input}`;
    }
  };

  const bgColor = (str: string) => {
    const filter = snap.data.filter((bookmark) => bookmark.name.includes(str));
    if (filter[0]) {
      return filter[0].color;
    }
    return snap.theme.color.background;
  };

  // listens for a-z keypresses to conditionally render search input
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler, false);
    return () => window.removeEventListener("keydown", keydownHandler, false);
  }, []);

  // listens for "enter", submits query
  useEffect(() => {
    window.addEventListener("keydown", submitQuery, false);
    return () => window.removeEventListener("keydown", submitQuery, false);
  }, [snap.input]);

  if (snap.input.length > 0)
    return (
      <ThemeProvider theme={snap.theme}>
        <Container
          style={{
            background: `${bgColor(stagedShortcut[0]?.name)}`,
          }}
        >
          <InputContainer>
            <Input
              autoFocus
              height="6rem"
              width="100%"
              onChange={(e) => handleInput(e)}
            />
          </InputContainer>
          <Subtext>{stagedShortcut[0]?.name}</Subtext>
        </Container>
      </ThemeProvider>
    );

  if (snap.input.length === 0 && snap.clock)
    return (
      <ThemeProvider theme={snap.theme}>
        <Container>
          <Time />
        </Container>
      </ThemeProvider>
    );

  if (!snap.clock)
    return (
      <ThemeProvider theme={snap.theme}>
        <Container>
          <BookmarkGrid>{bookmarks}</BookmarkGrid>
        </Container>
      </ThemeProvider>
    );

  return <></>;
}

const Container = styled.div`
  display; flex;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.color.background};
  background-image:
  transition: .1s;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 300px;
  font-family: ${(props) => props.theme.font.serif};
  font-style: italic;
  font-weight: 900;
  font-size: 4rem;
  line-height: 3rem;
`;

const Subtext = styled.div`
  font-family: sans-serif;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  text-shadow: #333 1px 0 1px;
  margin-top: 50px;
`;

export default App;
