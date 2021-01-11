import React, { Component } from 'react';
import { Button, Card, CardTitle, Col, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class CatShow extends Component {
    render() {
        let {cat} = this.props
        return(
            <Col className = "cat-edit">
            <Card body >
              <CardTitle>Hi, my name is { cat.name }!</CardTitle>
              <CardText>I am { cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
            </Card>

              <NavLink
                to={`/catedit/${this.props.cat.id}`}
              >
                <Button color="secondary">
                  Edit Cat Profile
                </Button>
              </NavLink>

          </Col>
        )
}
}

export default CatShow;