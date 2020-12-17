import { connect } from "react-redux";
import React from "react";
import { RootState } from "../state/store";
import { UserLoginInterface } from "../login/index";
import Users from "../users/UsersPageContainer";
import './styles/dashboard.css'
import Admin from "../admins/Admin";

interface Props {
    data: UserLoginInterface,
    token: string | null,
    verifyToken: (token: string | null) => Promise<void>,
}

export class Dashboard extends React.Component<Props> { 
  componentDidMount = () => {
      this.props.verifyToken(this.props.token)
  }

  render() {
    return (
      <div>
        <div id="footer-dashboard">
            <h1>DashBoard</h1>
        </div>
        {this.props.data.status === 'admin' ? <Admin image={[]} /> : <Users />}
      </div>
    );
  }
}
const mapState = (state: RootState) => ({
    data: state.auth.list,
    token: state.auth.token,
    isModalOpened: state.users.isModalOpened,
});

const mapDispatch = (dispatch: any) => ({
    verifyToken: dispatch.auth.verifyToken,
});

export default connect(mapState, mapDispatch)(Dashboard); 