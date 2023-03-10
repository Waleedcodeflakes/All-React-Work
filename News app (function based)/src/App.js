import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App =() => {
  pageSize = 3;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={2}
        color='#3a52f0'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="us" category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="business" pageSize={this.pageSize} country="us" category="business"/> </Route>
        <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/> </Route>
        <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="us" category="general"/> </Route>
        <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="health" pageSize={this.pageSize} country="us" category="health"/> </Route>
        <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="science" pageSize={this.pageSize} country="us" category="science"/> </Route>
        <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="sports" pageSize={this.pageSize} country="us" category="sports"/> </Route>
        <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="technology" pageSize={this.pageSize} country="us" category="technology"/> </Route>
        </Switch>
        </Router>
      </div>
    )
}