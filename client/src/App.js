import React, { Component } from 'react'
import Layout from './components/Layout/Layout';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import { connect } from 'react-redux';
import { fetchUser } from './store/action/actionAuth';
import Logout from './components/Logout/Logout';
import TrendingRepo from './components/TrendingRepo/TrendingRepo';

class App extends Component {
  componentDidMount() {
    // Check Initially if the user is logged in when the app loads
    this.props.fetchUser()
  }
    render() {
      // Show this routes if one is not logged in
      let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      )
      if (this.props.isAuthenticated) {
        routes = (
          // Show the following routes for one who is logged in
        <Switch>
            <Route path="/logout" component = {Logout}/>
            <Route path="/trending-repo" component = {TrendingRepo}/>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </Switch>
        )
      }
      return (
        <BrowserRouter>
          <Layout>
            {routes}
          </Layout>
        </BrowserRouter>
      
      )
    }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // Action to fecth the user details from the backend
    fetchUser: () => dispatch(fetchUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
