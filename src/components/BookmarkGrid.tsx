import styled from 'styled-components'

const BookmarkGrid = ({children}: any) => {
  return (
    <Container>
     {children} 
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 4rem;
  row-gap: 1rem;
  padding-top: 300px !important;
  justify-content: center;
`

export default BookmarkGrid
