import { connect } from "react-redux";
import React from "react";
import { RootDispatch, RootState } from "../state/store";
import './styles/dashboard.css'
import { UserLoginInterface } from "../login/index";
import Users from "../users/Users";
import { Admin } from "../admins/Admin";

interface Props {
    data: UserLoginInterface,
}

export class Dashboard extends React.Component<Props> { 
    render() {
        return (
            <div>
                <div id="footer-dashboard">
                    <h1>DashBoard</h1>
                </div>
                {this.props.data.status === 'admin' ? <Admin /> : <Users />}
            </div>
        );
    }
}
const mapState = (state: RootState) => ({
    data: state.auth.list,
});

const mapDispatch = (dispatch: RootDispatch) => ({});

export default connect(mapState, mapDispatch)(Dashboard); 