import { useEffect, useState } from "react";
import styled from "styled-components";
import { store } from "../store";

const Time = () => {
  const [_time, setTime] = useState<any>();
  // clock
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
  }, []);

  const date = new Date();

  let timeDisplay = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return <Clock onClick={() => (store.clock = false)}>{timeDisplay}</Clock>;
};

const Clock = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.foreground};
  padding-top: 300px;
  font-family: ${(props) => props.theme.font.serif};
  cursor: pointer;
  font-size: 6rem;
`;

export default Time;
