import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import BannerSection from '../../BannerSection/BannerSection'

import Header from '../../Header/Header'

import {
  MovieDetailsMainContainer,
  Image,
  SimilarMoviesContainer,
  MovieDetailsContainer,
  SimilarMovieHeading,
  MoviesList,
  Text,
  DetailsContainer,
  SpecificDetailContainer,
} from './styledComponent'

const token = 'eca1bcc11e31c4033d638b8041720f6f'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MovieDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    details: {
      urlDesktop: '',
      urlMobile: '',
      title: '',
      description: '',
      releaseDate: '',
      genres: [],
      audioAvailable: [],
      ratingCount: '',
      ratingAverage: '',
      budget: '',
    },
    similarMovies: [],
  }

  componentDidMount() {
    this.getMovieDetails()
    this.getSimilarVideo()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${token}&language=en-US`
    const response = await fetch(url)

    if (response.ok) {
      const responseData = await response.json()
      console.log(responseData.genres)
      this.setState({
        apiStatus: apiConstants.success,
        details: {
          urlDesktop: `https://image.tmdb.org/t/p/w500${responseData.backdrop_path}`,
          urlMobile: `https://image.tmdb.org/t/p/w500${responseData.poster_path}`,
          title: responseData.original_title,
          description: responseData.overview,
          releaseDate: responseData.release_date,
          genres: responseData.genres,
          ratingCount: responseData.vote_count,
          ratingAverage: responseData.vote_average,
          budget: responseData.budget,
          audioAvailable: responseData.spoken_languages.map(
            each => each.english_name,
          ),
        },
      })
    }
  }

  getSimilarVideo = async () => {
    const {match} = this.props
    const {id} = match.params
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${token}&language=en-US&page=1`

    const response = await fetch(url)
    if (response.ok) {
      const responseData = await response.json()
      const trendingList = responseData.results
      const responseList = trendingList.map(eachItem => ({
        id: eachItem.id,
        url: `https://image.tmdb.org/t/p/w500/${eachItem.backdrop_path}`,
      }))

      this.setState({
        similarMovies: responseList,
      })
    }
  }

  onClickImage = event => {
    const {history} = this.props
    history.replace(`/movie/${event.target.id}`)
    this.getMovieDetails()
    this.getSimilarVideo()
  }

  renderSimilarMovies = () => {
    const {similarMovies} = this.state
    return similarMovies.map(eachItem => (
      <Image
        src={eachItem.url}
        key={eachItem.id}
        id={eachItem.id}
        onClick={this.onClickImage}
      />
    ))
  }

  renderDetails = () => {
    const {details} = this.state
    const {
      genres,
      audioAvailable,
      ratingCount,
      ratingAverage,
      budget,
      releaseDate,
    } = details
    return (
      <DetailsContainer>
        {genres.length !== 0 && (
          <SpecificDetailContainer>
            <Text tag>Generes</Text>
            {genres.map(eachItem => (
              <Text key={eachItem.id}>{eachItem.name}</Text>
            ))}
          </SpecificDetailContainer>
        )}
        {audioAvailable.length !== 0 && (
          <SpecificDetailContainer>
            <Text tag>Audio Available</Text>
            {genres.map(eachItem => (
              <Text key={eachItem.id}>{eachItem.name}</Text>
            ))}
          </SpecificDetailContainer>
        )}
        <SpecificDetailContainer>
          {ratingCount !== undefined && (
            <>
              <Text tag>Rating Count</Text>
              <Text>{ratingCount}</Text>
            </>
          )}
          {ratingAverage !== undefined && (
            <>
              <Text tag>Rating Average</Text>
              <Text>{ratingAverage}</Text>
            </>
          )}
        </SpecificDetailContainer>
        <SpecificDetailContainer>
          {budget !== undefined && (
            <>
              <Text tag>Budget</Text>
              <Text>{budget}</Text>
            </>
          )}
          {releaseDate !== undefined && (
            <>
              <Text tag>Release Date</Text>
              <Text>{releaseDate}</Text>
            </>
          )}
        </SpecificDetailContainer>
      </DetailsContainer>
    )
  }

  renderLoaderAndList = () => {
    const {apiStatus, details} = this.state
    const {urlDesktop, urlMobile, title, description, releaseDate} = details

    switch (apiStatus) {
      case apiConstants.success:
        return (
          <>
            <BannerSection
              url1={urlDesktop}
              url2={urlMobile}
              description={description}
              title={title}
            />
            <MovieDetailsContainer>
              {this.renderDetails()}
              <SimilarMoviesContainer>
                <SimilarMovieHeading>More like this</SimilarMovieHeading>
                <MoviesList> {this.renderSimilarMovies()}</MoviesList>
              </SimilarMoviesContainer>
            </MovieDetailsContainer>
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
    const {match} = this.props
    const {id} = match.params

    return (
      <MovieDetailsMainContainer key={id}>
        <Header
          absolute
          showNavIconsBar
          containerSearchBar
          containNavLinks
          showMenuIcon
          showProfileIcon
        />
        {this.renderLoaderAndList()}
      </MovieDetailsMainContainer>
    )
  }
}
export default MovieDetails
