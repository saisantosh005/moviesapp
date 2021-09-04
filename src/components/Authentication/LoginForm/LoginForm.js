import Cookies from 'js-cookie'
import {Component} from 'react'
import {
  LoginFormMainContainer,
  FormHeaderName,
  FormContainer,
  Form,
  FormHeading,
  LabelInputContainer,
  Label,
  Input,
  ErrorMessage,
  ButtonContainer,
  Button,
} from './styledComponent'
import Header from '../../Header/Header'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
      request_token: 'cca6b2a9a6aa2fd687430a935b0455f3a2e7eb24',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {'Content-type': 'application/json'},
    }
    const url =
      'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=eca1bcc11e31c4033d638b8041720f6f'
    const response = await fetch(url, options)

    if (response.ok) {
      this.setState({
        errorMessage: '',
      })
      const responseData = await response.json()
      Cookies.set('jwt_token', responseData.request_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        errorMessage: 'Please enter a valid Email and Password',
      })
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <LoginFormMainContainer>
        <Header>MOVIES</Header>
        <FormContainer>
          <Form onSubmit={this.onFormSubmit}>
            <FormHeading>Sign in</FormHeading>
            <LabelInputContainer>
              <Label>USERNAME</Label>
              <Input
                value={username}
                onChange={this.onChangeUsername}
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label>PASSWORD</Label>
              <Input
                value={password}
                onChange={this.onChangePassword}
                type="password"
              />
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </LabelInputContainer>
            <ButtonContainer>
              <Button type="submit">Sign in</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </LoginFormMainContainer>
    )
  }
}

export default LoginForm
