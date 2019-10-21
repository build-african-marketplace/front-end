import React from "react";
import axios from 'axios';
//import { axiosWithAuth } from "../../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            email: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        axios
            .post(`https://african-marketplace-bw.herokuapp.com/api/auth/login`, this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.user_id);
                // redirect to the apps main page?
                this.props.history.push("/events-home");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="login-page">
                <form onSubmit={this.login}>
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

export default Login;