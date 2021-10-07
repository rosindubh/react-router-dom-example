import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Welcome from './components/welcome'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="homepage">
            <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/welcome">
                <Welcome />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;