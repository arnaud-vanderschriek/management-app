import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";
import './styles/navbar.css';

interface Props {
  isModalOpened: boolean,
  setIsModalOpened: (isModalOpened: boolean) => Promise<void>
}

export class NavbarMailingPopup extends React.Component<Props> {
  render() {
    return (
      <div id={this.props.isModalOpened ?'navbar-mailing-popup': 'navbar-mailing-popup-hide'}>
        <button onClick={() => this.props.setIsModalOpened(false)}>x</button>
        <h4>Mailing</h4>
        <p>message from admin</p>
        <div id='admin-message'>

        </div>
        <h4>message to send</h4>
        <textarea></textarea>
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