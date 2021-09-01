import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../../Header/Header'
import {
  HomeMainContainer,
  BannerSectionContainer,
  DetailsContainer,
  BannerDescription,
  BannerMainHeading,
  BannerSectionButton,
  ShadowDiv,
  TrendingSectionContainer,
} from './styledComponent'

class Home extends Component {
  state = {}

  renderBannerSection = () => (
    <BannerSectionContainer>
      <DetailsContainer>
        <BannerMainHeading>Super Man</BannerMainHeading>
        <BannerDescription>
          Superman is a fictional superhero who first appeared in American comic
          books published by DC Comics.
        </BannerDescription>
        <BannerSectionButton>Play</BannerSectionButton>
      </DetailsContainer>
      <ShadowDiv />
    </BannerSectionContainer>
  )

  render() {
    // Cookies.set('jwt_token', responseData, {expires: 1})

    console.log(Cookies.get('jwt_token'), 'hello')
    return (
      <HomeMainContainer>
        <Header />
        {this.renderBannerSection()}
        <TrendingSectionContainer>1</TrendingSectionContainer>
      </HomeMainContainer>
    )
  }
}

export default Home
