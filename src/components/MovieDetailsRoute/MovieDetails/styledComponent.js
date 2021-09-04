import styled from 'styled-components'

const MovieDetailsMainContainer = styled.div`
  min-height: 100vh;
  background: black;
  color: #ffffff;
`
const MovieDetailsContainer = styled.div`
  padding: 32px;
  @media screen and (min-width: 768px) {
    padding: 24px 165px;
  }
`
const SimilarMoviesContainer = styled.div``
const SimilarMovieHeading = styled.div`
  color: #ffffff;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 16px;
`
const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled.img`
  width: 83px;
  height: 64px;
  margin-right: 13px;
  margin-bottom: 12px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    max-width: 255px;
    height: 170px;
  }
`

const Text = styled.p`
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: ${props => (props.tag ? 600 : 400)};
  font-size: ${props => (props.tag ? 14 : 12)}px;
  line-height: ${props => (props.tag ? 18 : 20)}px;
  color: ${props => (props.tag ? '#64748b' : '#FFFFFF')};
  margin: 0px;
  margin-top: 7px;
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.tag ? 18 : 16)}px;
    line-height: ${props => (props.tag ? 26 : 24)}px;
    color: ${props => (props.tag ? '#64748b' : '#FFFFFF')};
    margin: 0px;
    margin-top: 7px;
  }
`
const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SpecificDetailContainer = styled.div`
  margin-right: 15px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`
export {
  MovieDetailsMainContainer,
  MovieDetailsContainer,
  Image,
  Text,
  SimilarMoviesContainer,
  SimilarMovieHeading,
  MoviesList,
  DetailsContainer,
  SpecificDetailContainer,
}
