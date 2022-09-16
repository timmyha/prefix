import styled from "styled-components";
import { Input } from "./ui/Inputs";
import { store, functions } from "../store";
import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { handleQuery } from "../utils/handleQuery";
import { validateUrl } from "../utils/validateUrl";

interface Props {
  filter: any;
}
const Search = () => {
  const snap = useSnapshot(store);

  // listens for "enter", submits query
  useEffect(() => {
    window.addEventListener("keydown", submitQuery, false);
    return () => window.removeEventListener("keydown", submitQuery, false);
  }, [snap.input]);

  const submitQuery = (e: KeyboardEvent) => {
    handleQuery(e, filter, snap, validateUrl);
  };

  const { handleInput } = functions;

  const bgColor = (str: string) => {
    const filter = snap.prefixData.data.filter((bookmark: any) =>
      bookmark.name.includes(str)
    );
    if (filter[0]) {
      return filter[0].color;
    }
    return snap.prefixData.theme.color.background;
  };

  const filter = snap.prefixData.data.filter((bookmark: any) => {
    const prefix = bookmark.prefix;
    const match = prefix.includes(snap.input) && prefix[0] === snap.input[0];
    if (match) return match;
  });

  return (
    <Container
      style={{
        background: `${bgColor(filter[0]?.name)}`,
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
      <Subtext>{filter[0]?.name}</Subtext>
    </Container>
  );
};

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

export default Search;
