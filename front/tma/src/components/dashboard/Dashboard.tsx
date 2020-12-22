import { connect } from "react-redux";
import React from "react";
import { RootState } from "../state/store";
import { UserLoginInterface } from "../login/index";
import Users from "../users/UsersPageContainer";
import NavbarContainer from "../navbar/NavbarContainer";
import AdminContainer from "../admins/AdminContainer";
import './styles/dashboard.css';

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
        <NavbarContainer list={this.props.data}/>
        {this.props.data.status === 'admin' ? <AdminContainer /> : <Users />}
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