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
    this.props.fetchUser()
  }
    render() {
      let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      )
      if (this.props.isAuthenticated) {
        routes = (
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
    fetchUser: () => dispatch(fetchUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
