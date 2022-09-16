import styled from "styled-components";
import { store } from "../store";
import Bookmark from "./Bookmark";

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
      );
    });
  return <Container>{bookmarks}</Container>;
};

const Container = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 4rem;
  row-gap: 1rem;
  padding-top: 300px !important;
  justify-content: center;
`;

export default BookmarkGrid;
