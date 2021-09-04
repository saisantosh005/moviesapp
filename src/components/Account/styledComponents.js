import styled from 'styled-components'

const AccountMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  @media screen and (min-width: 768px) {
    padding: 64px 166px;
  }
`
const MembershipContainer = styled.div`
  display: flex;
  border-top: ${props => (props.top ? ' 2px solid #cbd5e1' : 'none')};
  border-bottom: ${props => (props.bottom ? ' 2px solid #cbd5e1' : 'none')};
  padding-top: 24px;
  padding-bottom: 22px;
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`
const Heading = styled.h1`
  color: #131313;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 0px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`
const TagText = styled.div`
  color: #94a3b8;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`
const UsernamePasswordContainer = styled.div``
const NameText = styled.p`
  margin: 0px;
`
const PasswordText = styled.p`
  margin: 0px;
`
const Button = styled.button`
  align-self: center;
  color: #ffffff;
  background: #e50914;
  border: none;
  outline: none;
  padding: 0px 10px;
  width: 91px;
  height: 40px;
  border-radius: 4px;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`

export {
  AccountMainContainer,
  DetailsContainer,
  Heading,
  MembershipContainer,
  TagText,
  PasswordText,
  UsernamePasswordContainer,
  NameText,
  Button,
}
