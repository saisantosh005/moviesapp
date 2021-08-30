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

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: 'asdf',
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
    const option = {username, password}
    const url = ''
    const response = await fetch(url, option)
    const responseData = await response.data()
    Cookies.set('jwt_token', responseData, {expires: 1})
    const {history} = this.props
    if (response.ok) {
      this.setState({
        errorMessage: '',
      })
      history.replace('/home')
    } else {
      this.setState({
        errorMessage: response.errorMessage,
      })
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <LoginFormMainContainer>
        <FormHeaderName>MOVIES</FormHeaderName>
        <FormContainer>
          <Form onSubmit={this.onFormSubmit}>
            <FormHeading>Sign in</FormHeading>
            <LabelInputContainer>
              <Label>USERNAME</Label>
              <Input value={username} onChange={this.onChangeUsername} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label>PASSWORD</Label>
              <Input value={password} onChange={this.onChangePassword} />
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </LabelInputContainer>
            <ButtonContainer>
              <Button type="button">Sign in</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </LoginFormMainContainer>
    )
  }
}

export default LoginForm
