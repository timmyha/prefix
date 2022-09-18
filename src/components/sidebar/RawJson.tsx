import styled from "styled-components";
import { store } from "../../store";
import { useSnapshot } from "valtio";
import { useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";

const RawJson = () => {
  const snap = useSnapshot(store);
  const [settings, setSettings] = useState<string | null>(
    JSON.stringify(snap.prefixData, null, 2)
  );

  const checkJSON = (str: string | null) => {
    try {
      if (str) JSON.parse(str);
    } catch (err) {
      return err && false;
    }
    return true;
  };

  const changeJSONdata = (e: any) => {
    setSettings(e.target.value);
  };

  const saveSettings = () => {
    if (settings) {
      store.prefixData = JSON.parse(settings);
      store.sidebarToggle = !store.sidebarToggle;
      window.localStorage.setItem('prefixData', JSON.stringify(JSON.parse(settings)))
    }
  };
  
  return (
    <Container>
      <SaveSettings>
        <Button>
          {checkJSON(settings) ? (
            <AiFillCheckSquare onClick={saveSettings} size="30px" />
          ) : (
            <div style={{"color":"palevioletred"}}>JSON is not parseable</div>
          )}
        </Button>
      </SaveSettings>
      <Textarea autoFocus onChange={changeJSONdata} value={settings || ""} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const SaveSettings = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Button = styled.div`
  color: lightgreen;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  font-family: ${(props) => props.theme.font.sans};
`;

const Textarea = styled.textarea`
  display: flex;
  margin: auto;
  height: 80%;
  width: 80%;
  whitespace: pre-wrap;
  background-color: transparent;
  font-family: ${(props) => props.theme.font.mono};
  font-size: 0.7rem;
  color: #ebc934;
  border: 0.5px dotted white;
  &:focus {
    outline: 0.5px dotted white;
  }
`;

export default RawJson;
