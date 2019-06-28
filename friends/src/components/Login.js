import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
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

    handleLogin = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/friends'));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { login }
)(Login);