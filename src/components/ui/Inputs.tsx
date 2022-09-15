import styled from "styled-components";

export const Input = styled.input<{ height: string; width: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: transparent;
  border: none;
  text-align: center;
  color: #ffffff;
  caret-color: transparent;
  text-shadow: #333 1px 0 1px;
  &:focus {
    outline: none;
  }
`;
  // caret-color: transparent;
  // mix-blend-mode: difference;
