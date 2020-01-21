import React, { Component } from "react";

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../custom-button/custon-button.component'

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    };
    // prevents defualt action that happens when you click submit button
    // on a form.
    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        // pulling the name and value from the form
        const { value, name } = event.target
        this.setState({ [name]: value })
    }


  render() {
    return (
      <div className='sign-in'>
        <h2> I already have an account </h2>
            <span> Sign in with your email</span>
            
            <form onSubmit={this.handleSubmit}>

                <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                    label="email"
                />
                
                <FormInput
                name="password"
                    value={this.state.password}
                    type="password"
                    handleChange={this.handleChange}
                    label="password"
                    required
                />

                <CustomButton type="submit" value="Submit Form"> SIGN IN</CustomButton>
               
                
            </form>
      </div>
    );
  }
}

export default SignIn;
