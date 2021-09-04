import {Component} from 'react'
import {MovieDetailsMainContainer} from './styledComponent'
import Header from '../../Header/Header'
import BannerSection from '../../BannerSection/BannerSection'

const token = 'eca1bcc11e31c4033d638b8041720f6f'

class MovieDetails extends Component {
  state = {
    details: {
      url: '',
      title: '',
      description: '',
      releaseDate: '',
      generes: [],
      audioAvailable: [],
      ratingCount: '',
      ratingAverage: '',
      budget: '',
    },
    similarMovies: [],
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    console.log(id)
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${token}&language=en-US`
    const response = await fetch(url)

    if (response.ok) {
      const responseData = await response.json()
      this.setState({
        details: {
          url: `https://image.tmdb.org/t/p/w500${responseData.backdrop_path}`,
          title: responseData.original_title,
          description: responseData.overview,
          releaseDate: responseData.release_date,
        },
      })
    }
  }

  render() {
    const {details} = this.state
    const {url, title, description, releaseDate} = details
    console.log(url)
    return (
      <MovieDetailsMainContainer>
        <Header
          absolute
          showNavIconsBar
          containerSearchBar
          containNavLinks
          showMenuIcon
          showProfileIcon
        />
        <BannerSection url1={url} description={description} title={title} />
      </MovieDetailsMainContainer>
    )
  }
}
export default MovieDetails
