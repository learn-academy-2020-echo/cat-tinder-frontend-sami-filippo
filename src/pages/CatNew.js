import React, { Component } from 'react';
import { Form,  FormGroup,  Input, Label, Button } from 'reactstrap'

// react-router import
import { Redirect } from 'react-router-dom'


class CatNew extends Component {

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
        this.props.createNewCat(this.state.form)
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
                Create a New Profile
                </Button>

                
                {/* // JavaScript code at the bottom of the JSX that will redirect when success is true */}
                { this.state.success && <Redirect to="/catindex" />}


            </React.Fragment>
        );
    }
}

export default CatNew;