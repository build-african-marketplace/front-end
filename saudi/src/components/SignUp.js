import React from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import { withRouter } from "react-router-dom"
import HomeSplash from '../images/HomeSplash.jpg'
import styled from 'styled-components';


const SignupContainer = styled.div`
    background-image: url(${HomeSplash});
    background-size: 100%;
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`

const SignupButton= styled.button`
    width: 212px;
    height: 32px;
    padding: 0;
    background-color: mediumvioletred;
    border-radius: 5px;
`

const SignupInput= styled.input`
    width: 200px;
    height: 30px;
    padding: 0 0 0 10px;
    border-radius: 5px;
    border: solid 1px grey;
    margin-bottom: 15px;
`

class Signup extends React.Component {

  state = {
      credentials: {
          email: "",
          password: ""
      }
  }

  handleChange = e => {
      this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
      });
  };

  handleSubmit = e => {
      e.preventDefault();
      this.props.register(this.state.credentials).then(() => {
          this.props.history.push("/seller-page")
      })
      console.log(this.state.credentials, 'THESE ARE THE CREDENTIALS')
  }

  render() {
      return (
          <div className="login">
              <SignupContainer>
              <h2>Sign Up</h2>
              <form onSubmit={this.handleSubmit}>
                      <SignupInput
                          className="login-input"
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={this.state.credentials.email}
                          onChange={this.handleChange}
                      />
                  <br />
                      <SignupInput
                          className="login-input"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.credentials.password}
                          onChange={this.handleChange}
                      />
                  <br />
                  <SignupButton>Signup</SignupButton>
              </form>
              </SignupContainer>
          </div>
      );
  }
}

export default withRouter(connect(
  null,
  {register}
)(Signup));