import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from "react-redux";
import React from "react";
import { RootState } from "../state/store";
import { UserLoginInterface } from "../login/index";
import UsersPageContainer from "../users/UsersPageContainer";
import Navbar2Container from "../navbar2/Navbar2Container";
import AdminContainer from "../admins/AdminContainer";
import { faRocket } from '@fortawesome/free-solid-svg-icons';
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
      <div id="dashboard">
        <div id='header-dashboard'>
          <div id='header-dashboard-leftSide'>
            <div id='icon-box'>
              <FontAwesomeIcon id='icon' icon={faRocket} />
            </div>
            <div id='title-box'>
              <h3>Management App</h3>
            </div>
          </div>
          <div id='header-dashboard-rightSide'>
            <h1>DashBoard</h1>
            <Navbar2Container  />
          </div>
        </div>
         {this.props.data.status === 'admin' ? <AdminContainer /> : <UsersPageContainer />}
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
    data: state.auth.user,
    token: state.auth.token,
});

const mapDispatch = (dispatch: any) => ({
    verifyToken: dispatch.auth.verifyToken,
});

export default connect(mapState, mapDispatch)(Dashboard); 
