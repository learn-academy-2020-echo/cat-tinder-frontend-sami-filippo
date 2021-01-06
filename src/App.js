import React, { Component } from 'react'
import './App.css';
import mockCats from './mockCats.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }
  render(){
    return (
      <div>
        <Home />
        <div>
        <Header />
        <Footer />
        <NotFound />
      </div>
    </div>
    )
  }
}


export default App
