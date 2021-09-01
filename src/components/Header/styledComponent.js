import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background: rgba(5, 0, 20, 0.2);
  padding: 20px 60px;
  width: 100vw;
`
const HeaderSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`

const LogoNavBarContainer = styled.div`
  display: flex;
  align-items: center;
`

const AppName = styled.h1`
  color: #e50014;
  text-decoration: none;
`
const LinkText = styled(Link)`
  text-decoration: none;
`

const NavText = styled.p`
  font-size: 16px;
  font-family: 'HK Grotesk';
  font-weight: 500;
  line-height: 26px;
  color: #ffffff;
  margin-left: 24px;
`

const SearchAndProfileContainer = styled.div`
  display: flex;
`
const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: ${props => (props.open ? '1px solid #ffffff' : 'none')};
  border-radius: 3px;
  padding: 7px;
  color: #ffffff;
`
const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
`

const ProfileImage = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-left: 10px;
  background: white;
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
}
