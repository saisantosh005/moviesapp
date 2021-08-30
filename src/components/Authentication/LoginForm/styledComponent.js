import styled from 'styled-components'

const LoginFormMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 20px;
  min-height: 100vh;

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
  width: 100%;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    flex-grow: 1;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: #0c0b10;
  opacity: 0.8;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    align-items: center;
    min-width: 450px;
    max-width: 500px;
    padding: 48px;
  }
`
const FormHeading = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  font-family: 'HK Grotesk';
  line-height: 40px;
  margin-top: 16px;
`
const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: auto;
  }
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
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`
const ErrorMessage = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #fb923c;
`
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    margin-bottom: 16px;
  }
`
const Button = styled.button`
  height: 40px;
  background: #e50914;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
  align-self: stretch;
  cursor: pointer;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 8px 20px;
  }
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
