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
  width: 255px;
  height: 170px;
  border-radius: 8px;
  margin-right: 29px;
  margin-top: 24px;
`
const CardsAndPaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 103px;
  padding-top: 34;
  padding-left: 165px;
  padding-right: 165px;
`
export {
  PopularMovieRouteMainContainer,
  ListContainer,
  CardsAndPaginationContainer,
  CardsContainer,
  Image,
}
