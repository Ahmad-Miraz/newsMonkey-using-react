
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  pageSize=10
  country='us'
  render() {
    return (
      <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<News pageSize={this.pageSize} country={this.country} category='general'/>}/>
        <Route path='/business' element={<News pageSize={this.pageSize} country={this.country} category='business'/>}/>
        <Route path='/entertainment' element={<News pageSize={this.pageSize} country={this.country} category='entertainment'/>}/>
        <Route path='/health' element={<News pageSize={this.pageSize} country={this.country} category='health'/>}/>
        <Route path='/science' element={<News pageSize={this.pageSize} country={this.country} category='science'/>}/>
        <Route path='/sports' element={<News pageSize={this.pageSize} country={this.country} category='sports'/>}/>
        <Route path='/technology' element={<News pageSize={this.pageSize} country={this.country} category='technology'/>}/>
      </Routes>
      </BrowserRouter>  
      </>

    )
  }
}


