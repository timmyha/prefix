import styled from 'styled-components'

export const Button = styled.button<{ width: string }>`
  text-align: center;
  font-family: ${props => props.theme.font.sans};
  font-size: .9rem;
  margin: auto;
  border: 2px solid ${props => props.theme.color.accent};
  background-color: ${props => props.theme.color.accent};
  color: ${props => props.theme.color.background};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 30px;
    &:hover {
      cursor: pointer;
      text-decoration: underline 2px solid; 
      text-underline-offset: 2px;
    }
    &:focus {
      outline: 2px solid ${props => props.theme.color.accent};
      outline-offset: 0px;
      color: ${props => props.theme.color.accent}
      background-color: ${props => props.theme.color.accent};
    }
    &:active {
      border: 2px solid ${props => props.theme.color.accent};
      color: ${props => props.theme.color.background}
      transition:  .3s all ease-out;
    }
`

export const ButtonSecondary = styled.button<{ width: string }>`
  text-align: center;
  font-family: ${props => props.theme.font.sans};
  margin: auto;
  font-size: .9rem;
  margin-top: 10px;
  border: 2px solid transparent;
  background-color: transparent;
  color: ${props => props.theme.color.accent};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 30px;
    &:hover {
      cursor: pointer;
      text-decoration: underline 2px solid; 
      text-underline-offset: 2px;
    }
    &:focus {
      outline: 2px solid ${props => props.theme.color.accent};
      outline-offset: 0px;
      color: ${props => props.theme.color.accent}
      background-color: ${props => props.theme.color.accent};
    }
    &:active {
      border: 2px solid ${props => props.theme.color.accent};
      color: ${props => props.theme.color.background}
      transition:  .3s all ease-out;
    }
`
