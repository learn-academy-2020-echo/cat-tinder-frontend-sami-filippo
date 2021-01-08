import React, { Component } from 'react'
import './App.css';
import cats from './mockCats.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CatIndex from './pages/CatIndex'
import CatEdit from './pages/CatEdit'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'

import { NavLink } from 'react-router-dom'



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: cats
    }
  }


  createNewCat = (newcat) => {
    console.log(newcat)
  }


  render(){
    return (
      <div>
        <Header />
        <Router>
    <Switch>
        <Route exact path="/" component={ Home } />


        {/* <Route path="/catindex" component={ CatIndex } /> */}
        <Route path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats } /> } />

        {/* <Route path="/catshow/:id" component={ CatShow } /> */}
        <Route
          exact path={"/catshow/:id"}
          render={ (props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === parseInt(id))
            return (
              <CatShow
                cat={ cat }
              />
                    )
               }}
        />


        {/* <Route path="/catnew" component={ CatNew } /> */}

        <Route
        path="/catnew"
        render={ (props) => <CatNew createNewCat={ this.createNewCat }/> }
        />


        <Route path="/catedit/:id" component={ CatEdit } />
        <Route component={ NotFound }/>

      </Switch>
      
    </Router>

    <Footer />
      </div>
    
    )
  }
}


export default App
