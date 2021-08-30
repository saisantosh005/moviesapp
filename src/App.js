import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './components/Authentication/LoginForm/LoginForm'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
