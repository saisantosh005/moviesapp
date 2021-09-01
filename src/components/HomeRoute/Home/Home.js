import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../../Header/Header'
import {HomeMainContainer} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    // Cookies.set('jwt_token', responseData, {expires: 1})

    console.log(Cookies.get('jwt_token'), 'hello')
    return (
      <HomeMainContainer>
        <Header />
      </HomeMainContainer>
    )
  }
}

export default Home
