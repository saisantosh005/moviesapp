import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../../Header/Header'
import {
  HomeMainContainer,
  TrendingSectionContainer,
  SlickHeaderText,
} from './styledComponent'
import SlickSection from '../SlickContainer/SlickContainer'
import Footer from '../../Footer/Footer'
import BannerSection from '../../BannerSection/BannerSection'

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

  render() {
    const {trendingList, topRatedList, originals} = this.state
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
        <BannerSection
          title="Super Man"
          description="Superman is a fictional superhero who first appeared in American comic
          books published by DC Comics."
          url1="https://res.cloudinary.com/delguky36/image/upload/v1630496082/wp2581913-man-of-steel-wallpaper_1_envfzl.png"
          url2="https://res.cloudinary.com/delguky36/image/upload/v1630380340/Image_ixm9tv.png"
        />
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
