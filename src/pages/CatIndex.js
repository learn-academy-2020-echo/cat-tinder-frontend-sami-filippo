import React, { Component } from 'react';
// import { Card, CardTitle, Col } from 'reactstrap'
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'



class CatIndex extends Component {
    render() {
        return (
          // <div sm="3">
          //   <Col className="catIndexCol">
          //   { this.props.cats.map((cat, index) => {
          //     return (
          //       <Card body key={ index }>
          //         <CardTitle>
          //           <h4>Name: { cat.name }</h4>
          //           <h4>Age: { cat.age }</h4>
          //           <h4>Enjoys: { cat.enjoys }</h4>
          //         </CardTitle>
          //               <NavLink
          //                   to={`/catshow/${cat.id}`}
          //                   >
          //                   More information!
          //               </NavLink>
          //       </Card>
          //     )
          //   })}
          // </Col>
          // </div>
          <>
      {/* <div className="header-buttons">
        <a className="link" href="/"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Back to Home</Button></a>
        <a className="link" href="/new"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Sign Up</Button></a>
        <a style={{textDecoration:"none"}} href="/messages"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button></a>
      </div>
      <div className="cat-index-wrapper">
        <h3 className="cat-index-title">All the single cats in your area</h3><br/> */}
        <div className="cats-display-wrapper">


        {this.props.cats.map((cat,index) => {
          return(
            <ListGroup key={index} className="cat-wrapper">
              <a href={`/cats/${cat.id}`}><img style={{width: "300px"}} src={cat.image_path} /></a>
              <div className="cat-description-wrapper">

                <h4 className="cat-name">
                    <span style={{fontWeight: "bold"}}>{ cat.name }</span>, 
                  <span style={{fontWeight:"300"}}>{ cat.age }</span>
                </h4>
                
                <ListGroupItemText>Enjoys: { cat.enjoys } </ListGroupItemText>

                


                <NavLink to={`/catshow/${cat.id}`}><img src={cat.pic} width="250" height="250"></img> </NavLink>
              </div>
              
            </ListGroup>
          )
        })}

        </div>
      {/* </div> */}
    </>
        );
    }
}

export default CatIndex;