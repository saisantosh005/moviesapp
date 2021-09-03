import {Link} from 'react-router-dom'
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

class PopularMovieRoute extends Component {
  state = {
    popularMovieList: [],
    pageNumber: 1,
    totalNumber: 0,
  }

  componentDidMount() {
    this.getPopularMovieList()
  }

  getPopularMovieList = async () => {
    const {pageNumber} = this.state
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=eca1bcc11e31c4033d638b8041720f6f&language=en-US&page=${pageNumber}`

    const response = await fetch(url)
    if (response.ok) {
      const responseData = await response.json()
      const trendingList = responseData.results
      const totalNumber = responseData.total_pages
      console.log(totalNumber, responseData)
      const responseList = trendingList.map(eachItem => ({
        id: eachItem.id,
        url: `https://image.tmdb.org/t/p/w500/${eachItem.backdrop_path}`,
      }))
      this.setState({
        popularMovieList: responseList,
        totalNumber,
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
    const {pageNumber, totalNumber} = this.state
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
    console.log(popularMovieList)
    return popularMovieList.map(eachItem => (
      <Image src={eachItem.url} key={eachItem.id} />
    ))
  }

  render() {
    const {pageNumber, totalNumber} = this.state
    return (
      <PopularMovieRouteMainContainer>
        <Header />
        <CardsAndPaginationContainer>
          <CardsContainer>{this.renderCardList()}</CardsContainer>{' '}
          <Pagination
            increasePageCount={this.increasePageCount}
            decreasePageCount={this.decreasePageCount}
            pageNumber={pageNumber}
            totalNumber={totalNumber}
          />
        </CardsAndPaginationContainer>
        <Footer />
      </PopularMovieRouteMainContainer>
    )
  }
}

export default PopularMovieRoute
