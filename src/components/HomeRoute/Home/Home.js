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
  SlickHeaderText,
} from './styledComponent'
import SlickSection from '../SlickContainer/SlickContainer'
import Footer from '../../Footer/Footer'

const token = 'eca1bcc11e31c4033d638b8041720f6f'
class Home extends Component {
  state = {
    trendingList: [],
    topRatedList: [],
    originals: [],
  }

  componentDidMount() {
    this.getTrendingList()
    this.getTopRatedList()
    this.getOriginals()
  }

  getTrendingList = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${token}`
    const response = await fetch(url)

    if (response.ok) {
      const responseData = await response.json()
      const trendingList = responseData.results
      const responseList = trendingList.map(eachItem => ({
        id: eachItem.id,
        url: eachItem.backdrop_path,
      }))
      this.setState({
        trendingList: responseList,
      })
    }
  }

  getTopRatedList = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&language=en-US`

    const response = await fetch(url)

    if (response.ok) {
      const responseData = await response.json()
      const trendingList = responseData.results
      const responseList = trendingList.map(eachItem => ({
        id: eachItem.id,
        url: eachItem.backdrop_path,
      }))
      this.setState({
        topRatedList: responseList,
      })
    }
  }

  getOriginals = async () => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${token}`

    const response = await fetch(url)

    if (response.ok) {
      const responseData = await response.json()
      const trendingList = responseData.results

      const responseList = trendingList.map(eachItem => ({
        id: eachItem.id,
        url: eachItem.backdrop_path,
      }))
      this.setState({
        originals: responseList,
      })
    }
  }

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
    const {trendingList, topRatedList, originals} = this.state
    console.log(originals)
    return (
      <HomeMainContainer>
        <Header
          absolute
          showNavIconsBar
          containerSearchBar
          containNavLinks
          showMenuIcon
          showProfileIcon
        />
        {this.renderBannerSection()}
        <TrendingSectionContainer>
          <SlickHeaderText>Trending</SlickHeaderText>
          <SlickSection dataList={trendingList} />
          <SlickHeaderText>Top Rated</SlickHeaderText>
          <SlickSection dataList={topRatedList} />

          <SlickHeaderText>Originals</SlickHeaderText>
          <SlickSection dataList={originals} />
        </TrendingSectionContainer>
        <Footer />
      </HomeMainContainer>
    )
  }
}

export default Home
