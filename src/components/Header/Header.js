import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineMenuFold, AiFillCloseCircle} from 'react-icons/ai'

import {
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
} from './styledComponent'

class Header extends Component {
  state = {searchText: '', showNavIconsBar: false}

  onChangeSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  onClickMenuIcon = () => {
    this.setState(prevstate => ({
      showNavIconsBar: !prevstate.showNavIconsBar,
    }))
  }

  closeNameSection = () => {
    this.setState({
      showNavIconsBar: false,
    })
  }

  render() {
    const {searchText, showNavIconsBar} = this.state
    const {
      absolute,
      containerSearchBar,
      containNavLinks,
      showMenuIcon,
      isBlack,
      showProfileIcon,
    } = this.props
    return (
      <HeaderMainContainer absolute={absolute} isBlack={isBlack}>
        <HeaderSectionContainer>
          <LogoNavBarContainer>
            <LinkTextLogo to="/">
              <AppName>MOVIES</AppName>
            </LinkTextLogo>
            {containNavLinks && (
              <>
                <LinkText to="/">
                  <NavText>Home</NavText>
                </LinkText>
                <LinkText to="/popular">
                  <NavText>Popular</NavText>
                </LinkText>
              </>
            )}
          </LogoNavBarContainer>
          <SearchAndProfileContainer>
            {containerSearchBar && (
              <SearchInputContainer open>
                <SearchInput
                  value={searchText}
                  type="text"
                  onChange={this.onChangeSearchText}
                />
                <BiSearch />
              </SearchInputContainer>
            )}
            {showProfileIcon && (
              <Link to="/account">
                <ProfileImage src="https://res.cloudinary.com/delguky36/image/upload/v1630299488/sample.jpg" />
              </Link>
            )}
            {showMenuIcon && <MenuIcon onClick={this.onClickMenuIcon} />}
          </SearchAndProfileContainer>
        </HeaderSectionContainer>
        {showNavIconsBar && (
          <NavLinkSectionContainer>
            <LinkTextTwo to="/" show>
              <NavText>Home</NavText>
            </LinkTextTwo>
            <LinkTextTwo to="/popular" show>
              <NavText>Popular</NavText>
            </LinkTextTwo>
            <LinkTextTwo to="/account" show>
              <NavText>Account</NavText>
            </LinkTextTwo>
            <CloseIcon onClick={this.closeNameSection}>
              <AiFillCloseCircle />
            </CloseIcon>
          </NavLinkSectionContainer>
        )}
      </HeaderMainContainer>
    )
  }
}

export default Header
