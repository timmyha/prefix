import styled from 'styled-components'

interface Props {
    prefix: string
    name: string
    color: string
    link: string
}

const Bookmark = ({ prefix, name, color, link }: Props) => {
    return (
        <Container color={color} onClick={() => (location.href = link)}>
            <Prefix className="prefix">
                <PrefixText>{prefix}</PrefixText>
            </Prefix>
            <Name className="name">{name}</Name>
        </Container>
    )
}

const Container = styled.div<{ color: string }>`
    display: flex;
    cursor: pointer;
    & .name {
        opacity: 0.6;
    }
    &:hover .name {
        opacity: 1;
    }
    &:hover .prefix {
        background: ${(props) => props.color};
    }
`

const Prefix = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background: ${(props) => props.theme.color.foreground};
    color: ${(props) => props.theme.color.background};
    border-radius: 3px;
`

const PrefixText = styled.div`
    margin: auto;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.serif};
    font-weight: 900;
    font-style: italic;
`

const Name = styled.div`
    color: ${(props) => props.theme.color.foreground};
    font-family: ${(props) => props.theme.font.sans};
    font-weight: 300;
    font-style: none;
    margin-top: 8px;
    margin-left: 20px;
    font-size: 1rem;
    z-index: 1;
`

export default Bookmark
