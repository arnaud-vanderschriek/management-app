import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { RootState } from "../state/store";
import { UserLoginInterface } from "../login";
import './styles/navbar.css';
import NavbarMailingPopup from "./NavbarMailingPopup";

interface Props {
  isModalOpened: boolean,
  list: UserLoginInterface,
  logout: () => Promise<void>,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>,
}

export class Navbar extends React.Component<Props> {
  render() {
    return (
      <nav id='navbar'>
        <div id='navbar-right'>
          <p>{this.props.list.status} {this.props.list.username}</p>
        </div>
        <div id='navbar-left'>
          <div id='navbar-mail'>
            <button id='navbar-mail-button' onClick={() => this.props.setIsModalOpened(true)}>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </button>
          </div>
          <div id='navbar-logout'>
            <button id='navbar-logout-button' onClick={() => this.props.logout()}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        </div>
        <NavbarMailingPopup list={this.props.list}/>
      </nav>
    )
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.navbar.isModalOpened,
})

const mapDispatch = (dispatch: any) => ({
  logout: dispatch.auth.logout,
  setIsModalOpened: dispatch.navbar.setIsModalOpened,
})

export default connect(mapState, mapDispatch)(Navbar);