import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/Authentication/LoginForm/LoginForm'
import Home from './components/HomeRoute/Home/Home'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './App.css'
import NotFound from './components/NotFound/NotFound'
import PopularMovieRoute from './components/PopularMoviesRoute/PopularMovieRoute'
import Account from './components/Account/Account'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/popular" component={PopularMovieRoute} />
        <ProtectedRoute exact path="/account" component={Account} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
