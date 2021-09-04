import Cookies from 'js-cookie'
import Header from '../Header/Header'

import {
  AccountMainContainer,
  DetailsContainer,
  MembershipContainer,
  Heading,
  TagText,
  PasswordText,
  UsernamePasswordContainer,
  NameText,
  Button,
} from './styledComponents'

const Account = props => {
  const {username, password} = props
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <AccountMainContainer>
      <Header containNavLinks showMenuIcon isBlack showProfileIcon />
      <DetailsContainer>
        <Heading>Account</Heading>

        <MembershipContainer top bottom>
          <TagText>Membership</TagText>
          <UsernamePasswordContainer>
            <NameText>ljasdfkjsadfjsdflkjdsf</NameText>
            <PasswordText>password: ************</PasswordText>
          </UsernamePasswordContainer>
        </MembershipContainer>

        <MembershipContainer bottom>
          <TagText>Plan details</TagText>
          <UsernamePasswordContainer>
            <NameText>ljasdfkjsadfjsdflkjdsf</NameText>
          </UsernamePasswordContainer>
        </MembershipContainer>
        <Button type="button" onClick={onLogout}>
          Logout
        </Button>
      </DetailsContainer>
    </AccountMainContainer>
  )
}

export default Account
