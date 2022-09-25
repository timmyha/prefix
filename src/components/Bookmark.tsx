import styled from 'styled-components'

interface Props {
    prefix: string
    name: string
    color: string
    link: string
}

const Bookmark = ({ prefix, name, color, link }: Props) => {
    const handleLink = () => {
        console.log(link)
        if (link === 'http://localhost:3000' || link === 'localhost') {
            location.href = `http://localhost:${window.prompt('port?')}`
        } else {
            location.href = link
        }
    }
    return (
        <Container color={color} onClick={handleLink}>
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
        background: ${({ color }) => color};
    }
`

const Prefix = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.color.foreground};
    color: ${({ theme }) => theme.color.background};
    border-radius: 3px;
`

const PrefixText = styled.div`
    margin: auto;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.font.serif};
    font-weight: 900;
    font-style: italic;
`

const Name = styled.div`
    color: ${({ theme }) => theme.color.foreground};
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: 300;
    text-shadow: #333 1px 0 1px;
    font-style: none;
    margin-top: 8px;
    margin-left: 20px;
    font-size: 1rem;
    z-index: 1;
`

export default Bookmark
