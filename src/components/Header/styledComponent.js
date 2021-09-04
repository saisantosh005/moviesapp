import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineMenuFold} from 'react-icons/ai'

const HeaderMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: ${props => (props.absolute === true ? 'absolute' : 'none')};
  background-color: ${props =>
    props.isBlack ? '#131313' : 'rgba(5, 0, 20, 0.2)'};
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 20px 60px;
  }
`
const HeaderSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 32px;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`

const LogoNavBarContainer = styled.div`
  display: flex;
  align-items: center;
`

const AppName = styled.h1`
  color: #e50014;
  text-decoration: none;
  font-size: 26px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
const LinkText = styled(Link)`
  display: none;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const LinkTextLogo = styled(Link)`
  text-decoration: none;
`

const NavText = styled.p`
  font-size: 16px;
  font-family: 'HK Grotesk';
  font-weight: 500;
  color: #ffffff;
  margin: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    line-height: 26px;
  }
`

const SearchAndProfileContainer = styled.div`
  display: flex;
`
const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  border: ${props => (props.open ? '1px solid #ffffff' : 'none')};
  border-radius: 3px;
  padding: 4px;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    padding: 7px;
  }
`
const SearchInput = styled.input`
  color: #ffffff;
  font-family: 'HK Grotesk';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  background: none;
  border: none;
  outline: none;
  width: 54px;
  height: 16px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 121px;
    height: 21px;
  }
`

const ProfileImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 10px;
    margin: none;
  }
`

const MenuIcon = styled(AiOutlineMenuFold)`
  color: #ffffff;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const NavLinkSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 34;
  }
`
const LinkTextTwo = styled(Link)`
  text-decoration: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const CloseIcon = styled.div`
  color: #ffffff;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export {
  HeaderMainContainer,
  HeaderSectionContainer,
  LogoNavBarContainer,
  AppName,
  NavText,
  SearchAndProfileContainer,
  SearchInputContainer,
  SearchInput,
  ProfileImage,
  LinkText,
  LinkTextTwo,
  LinkTextLogo,
  MenuIcon,
  NavLinkSectionContainer,
  CloseIcon,
}
