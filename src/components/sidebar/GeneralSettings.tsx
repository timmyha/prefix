import styled from "styled-components";
import { useState } from "react";
import { Select } from "../ui/Selects.styles";
import { Button, ButtonSecondary } from "../ui/Buttons.styles";
import { store } from "../../store";
import { updateLocalStorage } from "../../utils/updateLocalStorage";

const GeneralSettings = () => {
  const [settings, setSettings] = useState<any>({
    hour24: false,
    search: "https://www.google.com/search?&q=",
  });

  const handleSelect = (e: any) => {
    const { name, value } = e.target;
    setSettings((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveSettings = () => {
    store.prefixData = {
      ...store.prefixData,
      user: {
        hour24: settings.hour24 === "true" ? true : false,
        search: settings.search,
        newUsser: false,
      },
    };
    console.log(store.prefixData.user.hour24);
    updateLocalStorage(store.prefixData);
  };

  return (
    <Container>
      <Setting>
        Search engine:&nbsp;
        <Select onChange={handleSelect} name="search">
          <option value="https://www.google.com/search?&q=">google</option>
          <option value="https://duckduckgo.com/?q=">ddg</option>
        </Select>
      </Setting>
      <Setting>
        Clock format:&nbsp;&nbsp;&nbsp;
        <Select onChange={handleSelect} name="hour24">
          <option value="false">12-hour</option>
          <option value="true">24-hour</option>
        </Select>
      </Setting>
      <Button onClick={saveSettings} width="100px">
        save
      </Button>
      <ButtonSecondary
        onClick={() => {store.sidebarToggle = false}}
        width="100px"
      >
        cancel
      </ButtonSecondary>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20%;
  width: 100%;
  color: white;
  margin: auto;
  margin-top: 0px !important;
`;

const Setting = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.font.sans};
  margin: auto;
`;

export default GeneralSettings;
