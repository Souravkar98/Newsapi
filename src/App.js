
import './App.css';
import NavBar from './Component/NavBar';
import News from './Component/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  pageSize=9
  render() {
    
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            
            <Route exact path="/"element={<News key="general" pageSize={this.pageSize} Category="general" />} /> 
            <Route exact path="/business"element={<News key="business" pageSize={this.pageSize} Category="business" />} /> 
            <Route exact path="/entertainment"element={<News key="entertainment" pageSize={this.pageSize} Category="entertainment" />} /> 
            <Route exact path="/health"element={<News key="health" pageSize={this.pageSize} Category="health" />} />
            <Route exact path="/science"element={<News key="science" pageSize={this.pageSize} Category="science" />} /> 
            <Route exact path="/sports"element={<News key="sports" pageSize={this.pageSize} Category="sports" />} /> 
            <Route exact path="/technology"element={<News key="technology" pageSize={this.pageSize} Category="technology" />} />
          </Routes>
          
          

        </Router>
      </div>
    )
  }
}

export default App

