import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { withRouter } from "react-router-dom"

import HomeSplash from '../images/HomeSplash.jpg'
import styled from 'styled-components'

const LoginContainer = styled.div`
   background-image: url(${HomeSplash});
   background-size: 100%;
   width: auto;
   height: 100%;
`;

class Login extends React.Component {

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
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push("/seller-page")
        })
    }

    render() {
        return (
            <div className="login">
                <LoginContainer>
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                        <input
                            className="login-input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                        />
                    <br />
                        <input
                            className="login-input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    <br />
                    <button className="login-btn">Log in</button>
                </form>
                </LoginContainer>
            </div>
        );
    }
}

export default withRouter(connect(
    null,
    { login }
)(Login));