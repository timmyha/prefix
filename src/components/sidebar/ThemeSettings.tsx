import styled from "styled-components";
import { useState } from "react";
import { Select } from "../ui/Selects.styles";
import { Button, ButtonSecondary } from "../ui/Buttons.styles";
import { store } from "../../store";
import { updateLocalStorage } from "../../utils/updateLocalStorage";

const ThemeSettings = () => {
  return (
    <Container>
      <Setting>
        Please see the JSON tab to change settings at this time.
      </Setting>
      <Setting></Setting>
      <Button onClick={() => console.log("hi")} width="100px">
        save
      </Button>
      <ButtonSecondary
        onClick={() => {
          store.sidebarToggle = false;
        }}
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

export default ThemeSettings;
