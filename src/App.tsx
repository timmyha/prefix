import styled from "styled-components";
import { Input } from "./components/ui/Inputs";
import { useSnapshot } from "valtio";
import { store, functions } from "./store";
import { useEffect } from "react";
import { keydownHandler } from "./utils/keydownHandler";

function App() {
  const snap = useSnapshot(store);
  const { handleInput } = functions;

  const bookmarks = snap.data.map((bookmark) => {
    const match = bookmark.name.includes(snap.input);
    return (
      <button style={{ opacity: match ? "1" : ".5" }} key={bookmark.id}>
        {bookmark.name}
      </button>
    );
  });

  const stagedShortcut = snap.data.filter((bookmark) => {
  const match = bookmark.name.includes(snap.input) &&  bookmark.name[0] === snap.input[0]
    if (match) return match
  }
  );

  console.log(stagedShortcut)

  const submitQuery = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (stagedShortcut[0]) {
        window.location.href = stagedShortcut[0].url;
      } window.location.href = snap.input
    }
  };

  const bgColor = (str: string | undefined) => {
    switch (str) {
      case "twitter":
        return "lightblue";
      case undefined: return "red"
    }
  };
  
  // listens for a-z keypresses to conditionally render search input
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler, false);
    return () => window.removeEventListener("keydown", keydownHandler, false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", submitQuery, false);
    return () => window.removeEventListener("keydown", submitQuery, false);
  }, [snap.input]);

  if (snap.input.length > 0)
    return (
      <Container style={{ backgroundColor: `${bgColor(stagedShortcut[0]?.name || undefined)}` }}>
        <Input
          autoFocus
          height="30px"
          width="300px"
          onChange={(e) => handleInput(e)}
        />
        {bookmarks && bookmarks}
      </Container>
    );

  if (snap.input.length === 0) return <div>{bookmarks}</div>;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
