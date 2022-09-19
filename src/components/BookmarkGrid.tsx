import styled from 'styled-components'
import { store } from '../store'
import Bookmark from './Bookmark'

const BookmarkGrid = () => {
    const bookmarks = store.prefixData.data
        .sort((a: any, b: any) => a.id - b.id)
        .map((bookmark: any) => {
            return (
                <Bookmark
                    key={bookmark.id}
                    color={bookmark.color}
                    name={bookmark.name}
                    prefix={bookmark.prefix}
                    link={bookmark.url}
                />
            )
        })
    return <Container>{bookmarks}</Container>
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 4rem;
    row-gap: 1rem;
    padding-top: 300px !important;
    justify-content: center;
    @media (max-width: 700px) {
        grid-template-columns: repeat(3, auto);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 400px) {
        grid-template-columns: repeat(1, auto);
        padding-top: 100px !important;
    }
`

export default BookmarkGrid
