import React, { Component } from 'react';
import { Card, CardTitle, Col, CardText } from 'reactstrap'

class CatShow extends Component {
    render() {
        let {cat} = this.props
        return(
            <Col sm="6" id="show-body">
            <Card body >
              <CardTitle>Hi, my name is { cat.name }!</CardTitle>
              <CardText>I am { cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
            </Card>
          </Col>
        )
}
}

export default CatShow;