import React from "react";
import { connect } from "react-redux";

interface Props {
    login: (dto: {
      username: string,
      email: string,
      password: string }) => Promise<void>,
  }

interface State {
    username: string,
    password: string,
}

export class LoginForm extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleOnChange = (field: "username" | "password", value: string) => {
        const state: State = {...this.state};   
        state[field] = value;
        this.setState(state)
        console.log(field);
    }

    handleClick = () => {
        console.log("hebentoi");
    }

    render() {
        return (
            <form id="login-form">
                <label htmlFor="username">username</label>
                <input 
                type="text" 
                defaultValue={this.state.username}
                onClick={(e) => this.handleOnChange('username', (e.target as HTMLInputElement).value)}>
                </input>
                <label htmlFor="password">password</label>
                <input 
                type="password" 
                defaultValue={this.state.password}
                onClick={(e) => this.handleOnChange('password', (e.target as HTMLInputElement).value)}>
                </input>
                <button onClick={this.handleClick}>connexion</button>
            </form>
        )
    }
}

const mapState = () => ({});

const mapDispatch = (dispatch: any) => ({ login: dispatch.auth.login });

export default connect(mapState, mapDispatch)(LoginForm);