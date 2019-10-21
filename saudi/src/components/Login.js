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
            <div className="login-page">
                <form onSubmit={() => this.props.login(this.state.credentials)}>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    <br />
                    <div className="password-input">
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </div>
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