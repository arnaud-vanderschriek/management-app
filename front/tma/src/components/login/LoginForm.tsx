import React from "react";

export class LoginForm extends React.Component {
    render() {
        return (
            <form id="login-form">
                <label htmlFor="username"></label>
                <input type="text"></input>
                <label htmlFor="password"></label>
                <input type="password"></input>
            </form>
        )
    }
}

export default LoginForm;