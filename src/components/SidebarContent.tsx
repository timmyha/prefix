import styled from 'styled-components'
import RawJson from './sidebar/RawJson'
import { useState } from 'react'
import GeneralSettings from './sidebar/GeneralSettings'
import ThemeSettings from './sidebar/ThemeSettings'

const SidebarContent = () => {
    const settings = ['General', 'Theme', 'JSON', 'Account']
    const [menu, setMenu] = useState<string>('General')

    const links = settings.map((link) => {
        return (
            <MenuLink key={link} onClick={() => setMenu(link)}>
                {link}
            </MenuLink>
        )
    })

    return (
        <Container>
            <Navigation>{links}</Navigation>
            {menu === 'JSON' ? (
                <RawJson />
            ) : menu === 'General' ? (
                <GeneralSettings />
            ) : menu === 'Theme' ? (
                <ThemeSettings />
            ) : (
                ''
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const Navigation = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    height: 0px;
    color: ${(props) => props.theme.color.foreground};
    font-family: ${(props) => props.theme.font.sans};
    font-size: 0.9rem;
    margin: auto;
    margin-top: 55px !important;
`

const MenuLink = styled.span`
    display: flex;
    width: 100px;
    cursor: pointer;
    z-index: 1;
    &:hover {
        text-decoration: underline 1px solid
            ${(props) => props.theme.color.foreground};
    }
`

export default SidebarContent
