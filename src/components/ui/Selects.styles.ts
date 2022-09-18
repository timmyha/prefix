import styled from 'styled-components';

export const Select = styled.select`
  background-color: white;
  border: .5px solid #222;
  font-family: ${props => props.theme.font.sans};
  font-size: 12px;
  padding-left: 10px !important;
  height: 30px;
  width: 175px;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 20px !important;
    &:focus {
      outline: .5px solid ${props => props.theme.color.accent};
      outline-offset: 0px;
      background-color: ${props => props.theme.color.accent};
    }
    &:active {
      border: .5px solid ${props => props.theme.color.accent};
      transition:  .3s all ease-out;
    }
`
