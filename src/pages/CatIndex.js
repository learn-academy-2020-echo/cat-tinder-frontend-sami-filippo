import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'



class CatIndex extends Component {
    render() {
        return (
            <Col sm="6">
            { this.props.cats.map((cat, index) => {
              return (
                <Card body key={ index }>
                  <CardTitle>
                    <h4>Name: { cat.name }</h4>
                    <h4>Age: { cat.age }</h4>
                    <h4>Enjoys: { cat.enjoys }</h4>
                  </CardTitle>
                        <NavLink
                            to={`/catshow/${cat.id}`}
                            >
                            More information!
                        </NavLink>
                </Card>
              )
            })}
          </Col>
        );
    }
}

export default CatIndex;