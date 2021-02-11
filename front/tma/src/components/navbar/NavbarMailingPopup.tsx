import React from "react";
import { connect } from "react-redux";
import { UserLoginInterface } from "../login";
import { RootState } from "../state/store";
import './styles/navbar.css';

interface Props {
  list: UserLoginInterface,
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>
}

export class NavbarMailingPopup extends React.Component<Props> {
  render() {
    return (
      <div id={this.props.isModalOpened ?'navbar-mailing-popup': 'navbar-mailing-popup-hide'}>
        <div id='button-box'>
          <button id='NavbarPopupButton' onClick={() => this.props.setIsModalOpened(false)}>x</button>
        </div>
        <div className='NavbarPopupTitle'>
          <h2>Mailing</h2>
        </div>
        {this.props.list.status === 'admin' ? <p>Message from users</p> : <p>Message from Admin</p>}
        <div id='admin-message'>
        </div>
        <div className='NavbarPopupTitle'>
          <h4>message to send</h4>
        </div>
        <textarea id='NavbarPopupTextarea'></textarea>
      </div>
    )
  }
}

const mapState = (state: RootState) => ({
  isModalOpened: state.navbar.isModalOpened,
})

const mapDispatch = (dispatch: any) => ({
  setIsModalOpened: dispatch.navbar.setIsModalOpened
})

export default connect(mapState, mapDispatch)(NavbarMailingPopup) ;
