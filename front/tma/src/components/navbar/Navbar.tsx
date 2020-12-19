import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import './styles/navbar.css';
import { connect } from "react-redux";
import { RootState } from "../state/store";

interface Props {
  logout: () => Promise<void>,
}

export class Navbar extends React.Component<Props> {
    render() {
      return (
        <nav id='navbar'>
          <div id='navbar-right'>
            <p>connexion infos</p>
          </div>
          <div id='navbar-left'>
            <div id='navbar-mail'>
              <button id='navbar-mail-button'>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </button>
            </div>
            <div id='navbar-logout'>
              <button id='navbar-logout-button' onClick={() => this.props.logout()}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </div>
          </div>
        </nav>
      )
  }
}

const mapState = (state: RootState) => ({

})

const mapDispatch = (dispatch: any) => ({
  logout: dispatch.auth.logout,
})

export default connect(mapState, mapDispatch)(Navbar);