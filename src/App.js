import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SiteBar from "./home/Navbar"
import Auth from "./auth/Auth"
import User from "./auth/User"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: undefined
    }
  }
  viewConductor = () => {
                                                      //<User/>
    return this.state.sessionToken !== undefined ? <User token={this.state.sessionToken}/> : <Auth tokenHandler={this.storeSessionToken}/>
  }
  removeSessionToken = () => {
    this.setState({
      sessionToken: undefined
    });
    localStorage.clear();
  }
  storeSessionToken = (token) => {
    this.setState( {sessionToken: token} )
  }
  render() {
    return (
      <div className="App">
        <SiteBar removeToken={this.removeSessionToken} token={this.state.sessionToken}/>
        {this.viewConductor()}
          
      </div>
    );
  }
}
export default App;
