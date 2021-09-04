import styled from 'styled-components'

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  min-height: 100vh;
  background: black;
`

const TrendingSectionContainer = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    max-width: 75%;
    margin-left: 102px;
    margin-right: 101px;
    margin-top: 32px;
  }
`
const SlickHeaderText = styled.h1`
  color: #ffffff;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  margin: 0px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`

export {HomeMainContainer, TrendingSectionContainer, SlickHeaderText}
