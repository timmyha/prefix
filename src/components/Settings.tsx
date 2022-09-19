import styled from 'styled-components'
import { GiSettingsKnobs } from 'react-icons/gi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { store } from '../store'
import { useSnapshot } from 'valtio'
import { updateLocalStorage } from '../utils/updateLocalStorage'
import { motion } from 'framer-motion'
import SidebarContent from './SidebarContent'

const Settings = () => {
    const snap = useSnapshot(store)

    const handleTooltipConfirm = () => {
        store.prefixData.user.newUser = false
        updateLocalStorage(store.prefixData)
    }

    const showSettings = () => {
        if (store.prefixData.user.newUser) {
            store.prefixData.user.newUser = false
            updateLocalStorage(store.prefixData)
        }
        store.sidebarToggle = !store.sidebarToggle
    }

    return (
        <div>
            {snap.prefixData?.user.newUser && (
                <Tooltip onClick={handleTooltipConfirm}>
                    <TooltipText>
                        change your bookmarks, default search engine, and theme
                        by clicking the settings icon.
                    </TooltipText>
                    <TooltipArrow>
                        <FaLongArrowAltRight size="20px" />
                    </TooltipArrow>
                </Tooltip>
            )}
            <SettingsButton onClick={showSettings}>
                {snap.sidebarToggle === false && (
                    <GiSettingsKnobs size="20px" />
                )}
            </SettingsButton>
            <Sidebar>
                {snap.sidebarToggle ? (
                    <motion.div
                        layout
                        data-genre={snap.sidebarToggle}
                        initial={{ width: '0px' }}
                        className="sidebar"
                    >
                        <SidebarContent />
                    </motion.div>
                ) : (
                    <motion.div layout className="child" />
                )}
            </Sidebar>
        </div>
    )
}

const Tooltip = styled.div`
    position: absolute;
    display: flex;
    top: 2px;
    right: 50px;
    width: 340px;
    padding: 12px;
    height: 60px;
    border-radius: 3px;
    font-size: 0.7rem;
    cursor: pointer;
    font-family: ${(props) => props.theme.font.sans};
    background: #f5429e;
    &::selection {
        background: none;
    }
`

const TooltipText = styled.div`
    display: flex;
    width: 90%;
`

const TooltipArrow = styled.div`
    display: flex;
    margin: auto;
`

const SettingsButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${(props) => props.theme.color.foreground};
    transition: 0.5s;
    opacity: 0.5;
    z-index: 99999;
    &:hover {
        opacity: 1;
        cursor: pointer;
        transition: 0.5s;
    }
`

const Sidebar = styled.div`
    position: absolute;
`
export default Settings
