import styled from "styled-components";

export const Input = styled.input<{ height: string; width: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: transparent;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  color: #c0c0c0;
  &:focus {
    outline: none;
  }
`;
