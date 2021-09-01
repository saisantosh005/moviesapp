import {
  NotFoundMainContainer,
  NotFoundHeader,
  AppName,
  DetailsContainer,
  Heading,
  Description,
  Button,
  ErrorCodeText,
  CodeBoldText,
} from './styledComponents'

const NotFound = props => {
  const navigateToHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <NotFoundMainContainer>
      <NotFoundHeader>
        <AppName>MOVIES</AppName>
      </NotFoundHeader>
      <DetailsContainer>
        <Heading>Lost Your Way?</Heading>
        <Description>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page
        </Description>
        <Button onClick={navigateToHome}>Netflix Home</Button>
        <ErrorCodeText>
          Error code <CodeBoldText>NSES-404</CodeBoldText>
        </ErrorCodeText>
      </DetailsContainer>
    </NotFoundMainContainer>
  )
}
export default NotFound
