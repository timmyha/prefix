import styled from "styled-components";

interface Props {
  prefix: string;
  name: string;
}

const Bookmark = ({ prefix, name }: Props) => {
  return (
    <Container>
      <Prefix>
        <PrefixText>{prefix}</PrefixText>
      </Prefix>
      <Name className="name">{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
  & .name{
    opacity: .6;
  }
  &:hover .name {
    opacity: 1;
  }
`;

const Prefix = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.color.foreground};
  color: ${(props) => props.theme.color.background};
  border-radius: 3px;
`;

const PrefixText = styled.div`
  margin: auto;
  font-size: 1rem;
  font-family: ${props => props.theme.font.serif}
`;

const Name = styled.div`
  color: ${(props) => props.theme.color.foreground};
  font-family: ${props => props.theme.font.sans};
  margin-top: 8px;
  margin-left: 20px;
  font-size: 1rem;
`;

export default Bookmark;
