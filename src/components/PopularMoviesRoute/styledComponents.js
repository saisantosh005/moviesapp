import styled from 'styled-components'

const PopularMovieRouteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: black;
  min-height: 100vh;
`
const ListContainer = styled.div`
  flex-grow: 1;
`
const Image = styled.img`
  width: 90px;
  height: 100px;
  border-radius: 4px;
  margin: 3px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 255px;
    height: 170px;
    border-radius: 8px;
    margin-right: 10px;
    margin-bottom: 24px;
  }
`
const CardsAndPaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
`
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`
export {
  PopularMovieRouteMainContainer,
  ListContainer,
  CardsAndPaginationContainer,
  CardsContainer,
  Image,
}
