import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'

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
} from './styledComponent'

class Header extends Component {
  state = {searchText: ''}

  onChangeSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {searchText} = this.state
    return (
      <HeaderMainContainer>
        <HeaderSectionContainer>
          <LogoNavBarContainer>
            <LinkText to="/">
              <AppName>MOVIES</AppName>
            </LinkText>
            <LinkText to="/">
              <NavText>Home</NavText>
            </LinkText>
            <LinkText to="/popular">
              <NavText>Popular</NavText>
            </LinkText>
          </LogoNavBarContainer>
          <SearchAndProfileContainer>
            <SearchInputContainer open>
              <SearchInput
                value={searchText}
                type="search"
                onChange={this.onChangeSearchText}
              />
              <BiSearch />
            </SearchInputContainer>
            <ProfileImage src="" />
          </SearchAndProfileContainer>
        </HeaderSectionContainer>
      </HeaderMainContainer>
    )
  }
}

export default Header
