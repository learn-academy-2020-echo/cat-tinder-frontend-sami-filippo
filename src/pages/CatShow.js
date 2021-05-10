import React, { Component } from 'react';
import { Button, Card, CardTitle, Col, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class CatShow extends Component {
    render() {
        let {cat} = this.props
        return(
            <Col className = "cat-edit">
            <Card body >
              <CardTitle>Hi, I'm { cat.name }!</CardTitle>
              <CardText>I am { cat.age } years old and I enjoy { this.props.cat.enjoys }.
              </CardText>

              <CardText><center>
                <img src={cat.pic} width="300" height="300"></img>
              </center>
              </CardText>

              
              
            </Card>

            <br/>
              <NavLink
                to={`/catedit/${this.props.cat.id}`}
              >
                <Button color="secondary">
                  Edit Profile 
                </Button>
              </NavLink>
            <br/>
              <NavLink
                  to={"/catindex"}
                >
                  <Button 
                  color="secondary" 
                  onClick = { () => this.props.deleteCat(this.props.cat.id) }>
                    😭Delete😭
                  </Button>
              </NavLink>

          </Col>
        )
}
}

export default CatShow;