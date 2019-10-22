import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

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

    render() {
        return (
            <div className="login">
                <h2>Log In</h2>
                <form onSubmit={() => this.props.login(this.state.credentials)}>
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

            </div>
        );
    }
}

export default connect(
    null,
    { login }
)(Login);