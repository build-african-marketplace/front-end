import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { withRouter } from "react-router-dom"
import HomeSplash from '../images/HomeSplash.jpg'
import styled from 'styled-components';

const LoginContainer = styled.div`
    background-image: url(${HomeSplash});
    background-size: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`

const Title = styled.h2`
    color: #fff;
`

const LoginButton= styled.button`
    width: 200px;
    height: 30px;
    padding: 0;
    background-color: mediumvioletred;
    border-radius: 5px;
    color: white;
`

const LoginInput= styled.input`
    width: 200px;
    height: 30px;
    padding: 0 0 0 10px;
    border-radius: 5px;
    border: solid 1px grey;
    margin-bottom: 15px;
`

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
        console.log(this.state.credentials, 'THESE ARE THE LOGIN SUBMISSION')
    }

    render() {
        return (
            <div className="login">
                <LoginContainer>
                <Title>Log In</Title>
                <form onSubmit={this.handleSubmit}>
                        <LoginInput
                            className="login-input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                        />
                    <br />
                        <LoginInput
                            className="login-input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    <br />
                    <LoginButton>Log in</LoginButton>
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