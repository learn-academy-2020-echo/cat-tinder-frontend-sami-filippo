import React, { Component } from 'react';
import { Form,  FormGroup,  Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'



class CatEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
          form:{
            name: "",
            age: "",
            enjoys: ""
          },
          success: false
        }
      }
      

      handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
      }

      handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        // a function call being passed from App.js
        this.props.updateCat(this.state.form, this.props.cat.id)
        this.setState({ success: true })

      }
    

    render() {
        return (
            <React.Fragment>
                <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                    type="text"
                    name="name"
                    onChange={ this.handleChange }
                    value={ this.state.form.name }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Age</Label>
                    <Input
                    type="number"
                    name="age"
                    onChange={ this.handleChange }
                    value={ this.state.form.age }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enjoys</Label>
                    <Input
                    type="text"
                    name="enjoys"
                    onChange={ this.handleChange }
                    value={ this.state.form.enjoys }
                    />
                </FormGroup>
                </Form>    

                <Button
                    name="submit"
                    color="secondary"
                    onClick={ this.handleSubmit }
                    >
                    Edit Cat Profile
                </Button>       

             { this.state.success && <Redirect to={ `/catshow/${this.props.cat.id}` }/> }

         </React.Fragment>
        );
    }
}

export default CatEdit;