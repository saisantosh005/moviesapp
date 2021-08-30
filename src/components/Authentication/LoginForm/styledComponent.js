import styled from 'styled-components'

const LoginFormMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  min-height: 100vh;
  padding: 20px;
  @media screen and (min-width: 768px) {
    background-image: url('https://res.cloudinary.com/delguky36/image/upload/v1630299528/netfilx_1_hekvjj.png');
    background-size: cover;
  }
`

const FormHeaderName = styled.h1`
  color: #e50014;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-left: 50px;
  }
`
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  //   height: 80vh;
  @media screen and (min-width: 768px) {
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 450px;
  min-height: 400px;
  background: #0c0b10;
  opacity: 0.8;
  border-radius: 8px;
`
const FormHeading = styled.h1`
  color: #ffffff;
`
const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  width: 80%;
`
const Label = styled.label`
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  font-family: 'Roboto';

  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 8px;
`
const Input = styled.input`
  height: 40px;
  background: #333333;
  border-radius: 2px;
  padding-left: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: rgba(126, 133, 142, 0.6);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  border: none;
  outline: none;
`
const ErrorMessage = styled.p`
  color: #fb923c;
`
const ButtonContainer = styled.div``
const Button = styled.button`
  height: 40px;
  background: #e50914;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  outline: none;
`

export {
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
}
