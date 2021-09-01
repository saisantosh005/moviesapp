import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './components/Authentication/LoginForm/LoginForm'
import Home from './components/HomeRoute/Home/Home'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
