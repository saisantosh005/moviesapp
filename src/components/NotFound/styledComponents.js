import styled from 'styled-components'

const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('https://res.cloudinary.com/delguky36/image/upload/v1630487891/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_eqb8oy.png');
  background-size: cover;
`

const NotFoundHeader = styled.div`
  background: black;
`

const AppName = styled.h1`
  color: #e50014;
  font-size: 30px;
  margin-left: 32px;
  margin-top: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    margin-left: 165px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 32px;

  @media screen and (min-width: 768px) {
    padding-left: 165px;
  }
`
const Heading = styled.h1`
  font-family: 'HK Grotesk';
  font-size: 40px;
  line-height: 52px;
  color: #ffffff;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 96px;
    line-height: 125px;
  }
`
const Description = styled.p`
  text-align: center;
  font-family: 'HK Grotesk';
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-family: 'HK Grotesk';
    font-size: 24px;
    line-height: 125px;
    margin: 0px;
  }
`
const Button = styled.button`
  background: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  color: #171f46;
  margin: 0px 8px;

  @media screen and (min-width: 768px) {
    height: 48px;
    width: 135px;
    font-size: 14px;
    line-height: 24px;
  }
`
const ErrorCodeText = styled.p`
  font-family: 'HK Grotesk';
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    margin-top: 48px;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
  }
`
const CodeBoldText = styled.span`
  font-weight: bold;
`
export {
  NotFoundMainContainer,
  NotFoundHeader,
  AppName,
  DetailsContainer,
  Heading,
  Description,
  Button,
  ErrorCodeText,
  CodeBoldText,
}
