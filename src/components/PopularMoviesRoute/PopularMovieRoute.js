import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import {
  PopularMovieRouteMainContainer,
  CardsContainer,
  Image,
  CardsAndPaginationContainer,
} from './styledComponents'
import Pagination from '../Pagination/Pagination'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PopularMovieRoute extends Component {
  state = {
    apiStatus: apiConstants.initial,
    popularMovieList: [],
    pageNumber: 1,
    totalNumber: 0,
  }

  componentDidMount() {
    this.getPopularMovieList()
  }

  getPopularMovieList = async () => {
    const {pageNumber} = this.state
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=eca1bcc11e31c4033d638b8041720f6f&language=en-US&page=${pageNumber}`

    const response = await fetch(url)
    if (response.ok) {
      const responseData = await response.json()
      const trendingList = responseData.results
      const totalNumber = responseData.total_pages
      const responseList = trendingList.map(eachItem => ({
        id: eachItem.id,
        url: `https://image.tmdb.org/t/p/w500/${eachItem.backdrop_path}`,
      }))
      this.setState({
        popularMovieList: responseList,
        totalNumber,
        apiStatus: apiConstants.success,
      })
    }
  }

  increasePageCount = () => {
    const {pageNumber, totalNumber} = this.state
    if (pageNumber < totalNumber) {
      this.setState(
        prevState => ({
          pageNumber: prevState.pageNumber + 1,
        }),
        this.getPopularMovieList,
      )
    }
  }

  decreasePageCount = () => {
    const {pageNumber} = this.state
    if (pageNumber > 0) {
      this.setState(
        prevState => ({
          pageNumber: prevState.pageNumber - 1,
        }),
        this.getPopularMovieList,
      )
    }
  }

  renderCardList = () => {
    const {popularMovieList} = this.state
    return popularMovieList.map(eachItem => (
      <Link to={`/movie/${eachItem.id}`} key={eachItem.id}>
        <Image src={eachItem.url} />
      </Link>
    ))
  }

  renderLoaderOrList = () => {
    const {pageNumber, totalNumber, apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return (
          <>
            <CardsContainer>{this.renderCardList()}</CardsContainer>
            <Pagination
              increasePageCount={this.increasePageCount}
              decreasePageCount={this.decreasePageCount}
              pageNumber={pageNumber}
              totalNumber={totalNumber}
            />
          </>
        )
      case apiConstants.inProgress:
        return (
          <div testid="loader">
            <Loader type="TailSpin" color="#D81F26" height="50" width="50" />
          </div>
        )
      case apiConstants.failure:
        return <div>Failure</div>
      default:
        return null
    }
  }

  render() {
    return (
      <PopularMovieRouteMainContainer>
        <Header
          showNavIconsBar
          containerSearchBar
          containNavLinks
          showMenuIcon
          showProfileIcon
        />
        <CardsAndPaginationContainer>
          {this.renderLoaderOrList()}
        </CardsAndPaginationContainer>
        <Footer />
      </PopularMovieRouteMainContainer>
    )
  }
}

export default PopularMovieRoute
