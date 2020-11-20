import React from "react";
import { connect } from "react-redux";
import './styles/login.css'

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
        console.log(state, "State");
    }

    handleClick = (event: MouseEvent) => {
         this.props.login({
            username: this.state.username,
            email: "",
            password: this.state.password,
        })
        
        event.preventDefault();  
    }

    render() {
        return (
            <form id="login-form">
                <div id="login-form-header">
                    <h2 id="login-form-header-title">connexion</h2>
                </div>
                <div id="login-form-body">
                    <label className="login-form-label" htmlFor="username">username</label>
                    <div className="login-form-input-box">
                        <input 
                            className="login-form-input"
                            type="text" 
                            defaultValue={this.state.username}
                            onChange={(e) => this.handleOnChange('username', (e.target as HTMLInputElement).value)}>
                        </input>
                    </div>
                    <label className="login-form-label" htmlFor="password">password</label>
                    <div className="login-form-input-box">
                        <input 
                            className="login-form-input"
                            type="password" 
                            defaultValue={this.state.password}
                            onChange={(e) => this.handleOnChange('password', (e.target as HTMLInputElement).value)}>
                        </input>
                    </div>
                </div>
                <div id="login-form-footer">
                    <div id="login-form-footer-link">
                        <a href="./"><p>déja enregistré ?</p></a>
                        <a href="./"><p>mot de passe oublié ?</p></a>
                    </div>
                    <div id="login-form-footer-button-box">
                        <button id="login-form-submit-button" onClick={(event) =>this.handleClick(event as unknown as MouseEvent)}>connexion</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapState = () => ({});

const mapDispatch = (dispatch: any) => ({ login: dispatch.auth.login });

export default connect(mapState, mapDispatch)(LoginForm);