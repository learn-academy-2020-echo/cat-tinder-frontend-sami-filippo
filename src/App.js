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

  updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }


  render(){
    return (
      <div>
        <Header />
        <Router>
    <Switch>

        {/* ------------HOME ROUTE---------------- */}

        <Route exact path="/" component={ Home } />

      
       {/* ------------INDEX ROUTE---------------- */}

        {/* <Route path="/catindex" component={ CatIndex } /> */}
        <Route path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats } /> } />



        {/* ------------SHOW ROUTE---------------- */}

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

        {/* ------------NEW ROUTE---------------- */}

        {/* <Route path="/catnew" component={ CatNew } /> */}

        <Route
        path="/catnew"
        render={ (props) => <CatNew createNewCat={ this.createNewCat }/> }
        />


        {/* ------------EDIT ROUTE---------------- */}
        {/* <Route path="/catedit/:id" component={ CatEdit } /> */}
        <Route
            exact path={"/catedit/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return(
                <CatEdit
                  updateCat={ this.updateCat }
                  cat={ cat }
                />
              )
           }}
        />


        {/* ------------NOTFOUND ROUTE---------------- */}

        <Route component={ NotFound }/>

      </Switch>

    </Router>

    <Footer />
      </div>
    
    )
  }
}


export default App
