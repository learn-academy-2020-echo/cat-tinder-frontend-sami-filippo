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
      cats: []
    }
  }

  componentDidMount(){
    this.catIndex()
  }
  
  catIndex = () => {
    fetch("http://localhost:3000/cats")
    .then(response => {
      return response.json()
    })
    .then(catsArray => {
      // set the state with the data from the backend into the empty array
      this.setState({ cats: catsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewCat = (newcat) => {
    return fetch("http://localhost:3000/cats", {
      // converting an object to a string
      body: JSON.stringify(newcat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateCat = (cat, id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      // converting an object to a string
      body: JSON.stringify(cat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  deleteCat = (id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      // this.catIndex()
      return response.json()
    })
    // .then(payload =>{
    //   this.catIndex()
    // })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }


  // createNewCat = (newcat) => {
  //   console.log(newcat)
  // }

  // updateCat = (cat, id) => {
  //   console.log("cat:", cat)
  //   console.log("id:", id)
  // }


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
                deleteCat={ this.deleteCat}
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
